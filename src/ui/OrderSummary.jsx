import styled from "styled-components";
import Button from "../ui/Button";
import { useCart } from "../context/CartContext";
import { rupiah } from "../hooks/useCurrency";
import { discountPrice } from "../hooks/useDiscount";
import { NavLink, useLocation } from "react-router-dom";

function OrderSummary({ handleSubmit, isSubmitting, onSubmit }) {
  const { discount } = useCart();
  const location = useLocation();
  const items = location.state?.cartItems;
  console.log(items);

  const subTotal = items.reduce(
    (a, b) => a + discountPrice(b.price, b.discount) * b.quantity,
    0
  );
  const shippingCost = subTotal >= 3_000_000 ? 0 : subTotal * 0.05;
  const discountCost = subTotal * discount;
  const tax = subTotal * 0.1;
  const total = subTotal - discountCost + shippingCost + tax;

  return (
    <Wrapper>
      <h3>Order Summary</h3>
      <div>
        {items?.map((item) => (
          <OrderProduct key={item.id}>
            <img src={item.image[0]} alt="" />
            <div>
              <p>{item.name}</p>
              <div>
                <span>{item.quantity}x</span>
                <span>{rupiah(discountPrice(item.price, item.discount))}</span>
              </div>
            </div>
          </OrderProduct>
        ))}
      </div>

      <div>
        <p>
          <span>Subtotal</span>
          <span>{rupiah(subTotal)}</span>
        </p>
        <p>
          <span>Shipping</span>
          <span>{rupiah(shippingCost)}</span>
        </p>
        <p>
          <span>Discount</span>
          <span>{discount * 100 === 0 ? "-" : `${discount * 100}%`}</span>
        </p>
        <p>
          <span>Tax</span>
          <span>{rupiah(tax)}</span>
        </p>
        <p>
          <span>Total</span>
          <span>{rupiah(total)}</span>
        </p>
        <Button
          $variant="primary"
          $fullWidth
          disabled={isSubmitting}
          as={NavLink}
          onClick={handleSubmit(onSubmit)}
        >
          Place Order{" "}
          <img src="/icons/arrow-right.svg" alt="arrow right button icon" />
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & h3 {
    padding-block: 20px;
    border-bottom: 1px solid var(--clr-dark-15);
    margin-inline: 20px;
  }
  & > div:first-of-type {
    padding: 20px;
    padding-block-end: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & > div:last-of-type {
    margin: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--clr-dark-15);
    display: flex;
    flex-direction: column;
    gap: 15px;

    & p {
      display: flex;
      justify-content: space-between;

      & span:last-child {
        font-weight: bold;
      }
    }

    & p:last-of-type {
      padding-block-start: 20px;
      border-top: 1px solid var(--clr-dark-15);
    }
  }
`;

const OrderProduct = styled.div`
  display: flex;
  gap: 20px;

  & img {
    width: 100%;
    max-width: 60px;
    max-height: 60px;
    object-fit: cover;
  }

  & p {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 270px;
  }

  & div div {
    display: flex;
    gap: 10px;
    font-weight: 600;

    & span:last-child {
      color: var(--clr-primary-100);
    }
  }
`;

export default OrderSummary;
