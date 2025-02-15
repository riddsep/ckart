import styled from "styled-components";

import { MaxWidthWrapper } from "./MaxWidthWrapper";
import BillingInformation from "./BillingInformation";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewOrder } from "../services/apiOrder";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { discountPrice } from "../hooks/useDiscount";
import { useCart } from "../context/CartContext";

function CheckoutDetail() {
  const { register, handleSubmit, watch, reset } = useForm();
  const { discount } = useCart();
  const location = useLocation();
  const products = location.state?.cartItems || [];
  const navigate = useNavigate();

  const subTotal = products.reduce(
    (a, b) => a + discountPrice(b.price, b.discount) * b.quantity,
    0
  );
  const shippingCost = subTotal >= 3_000_000 ? 0 : subTotal * 0.05;
  const discountCost = subTotal * discount;
  const tax = subTotal * 0.1;
  const total = subTotal - discountCost + shippingCost + tax;

  const queryClient = useQueryClient();

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createNewOrder,
    onSuccess: () => {
      toast.success("Order successfully created");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      navigate("/shop/orderPlaced");
      reset();
    },
    onError: () => toast.error("Something went wrong"),
  });

  const onSubmit = (data) => {
    const user = {
      name: data.name,
      email: data.email,
      phone: { mainNumber: data.phone, otherNumber: data.otherPhoneNumber },
      address: {
        detailAddress: data.address,
        province: data.province,
        city: data.city,
        subDistrict: data.subDistrict,
        postCode: data.postCode,
      },
    };

    const orderData = {
      user, // Update data user kalau ada perubahan
      orders: {
        // userId: user.id,
        status: "pending",
        subTotal,
        shippingCost,
        discountCost,
        tax,
        totalPrice: total,
      },
      orderItems: products.map((product) => ({
        productId: product.id,
        productName: product.name,
        price: discountPrice(product.price, product.discount),
        quantity: product.quantity,
        totalItemPrice:
          discountPrice(product.price, product.discount) * product.quantity,
      })),
    };

    mutate(orderData);
  };

  return (
    <Wrapper>
      <h1>Checkout</h1>
      <Main>
        <div>
          <BillingInformation register={register} />
          <PaymentMethod register={register} watch={watch} />
        </div>
        <OrderSummary
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isCreating={isCreating}
          products={products}
          subTotal={subTotal}
          shippingCost={shippingCost}
          tax={tax}
          discount={discount}
          total={total}
        />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  & h1 {
    margin-block: 50px;
    font-size: 30px;
  }
`;

const Main = styled.div`
  display: flex;
  gap: 30px;

  & div {
    flex: 1;
  }

  & > div:last-of-type {
    border: 1px solid var(--clr-dark-15);
    margin-block-end: 30px;
    max-width: 407px;
    align-self: flex-start;
  }
`;

export default CheckoutDetail;
