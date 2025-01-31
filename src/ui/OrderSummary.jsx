import styled from "styled-components";
import Button from "../ui/Button";

function OrderSummary() {
  return (
    <Wrapper>
      <h3>Order Summary</h3>
      <div>
        <OrderProduct>
          <img src="/images/product-detail-1.png" alt="" />
          <div>
            <p>Pilke Wooden Storage</p>
            <div>
              <span>1x</span>
              <span>$ 254.50</span>
            </div>
          </div>
        </OrderProduct>
        <OrderProduct>
          <img src="/images/product-detail-1.png" alt="" />
          <div>
            <p>Pilke Wooden Storage</p>
            <div>
              <span>1x</span>
              <span>$ 254.50</span>
            </div>
          </div>
        </OrderProduct>
      </div>

      <div>
        <p>
          <span>Subtotal</span>
          <span>$ 254.50</span>
        </p>
        <p>
          <span>Shipping</span>
          <span>Free</span>
        </p>
        <p>
          <span>Discount</span>
          <span>10%</span>
        </p>
        <p>
          <span>Tax</span>
          <span>$ 0.21</span>
        </p>
        <p>
          <span>Total</span>
          <span>$ 19.00</span>
        </p>
        <Button $variant="primary" $fullWidth>
          Place Order <img src="/icons/arrow-right.svg" alt="" />
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
