import styled from "styled-components";
import Button from "../ui/Button";
import { rupiah } from "../hooks/useCurrency";
import { discountPrice } from "../hooks/useDiscount";
import { NavLink } from "react-router-dom";

function OrderSummary({
  handleSubmit,
  isCreating,
  onSubmit,
  products,
  subTotal,
  shippingCost,
  discount,
  tax,
  total,
}) {
  return (
    <Wrapper>
      <h3>Order Summary</h3>
      <div>
        {products?.map((item) => (
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
          disabled={isCreating}
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
