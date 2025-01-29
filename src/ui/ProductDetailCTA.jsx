import styled from "styled-components";
import Button from "./Button";
import ProductDetailCount from "./ProductDetailCount";

function ProductDetailCTA() {
  return (
    <CallToAction>
      <div>
        <ProductDetailCount />
        <div>
          <Button $variant="primary">
            Add to Cart <img src="/icons/shopping-cart-light.svg" alt="" />
          </Button>
          <Button $variant="outline">
            Buy Now <img src="/icons/arrow-right-dark.svg" alt="" />
          </Button>
        </div>
      </div>
      <p>
        Estimate delivery time: <span>12-26 days</span>
      </p>
    </CallToAction>
  );
}

const CallToAction = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    padding-block-end: 30px;
    margin-block-end: 30px;
    border-bottom: 1px solid var(--clr-dark-15);

    & > div {
      display: flex;
      align-items: center;

      span:not(:first-of-type) {
        padding: 8px 18px;
        border: 1px solid var(--clr-dark-15);
      }

      span:first-of-type {
        margin-right: 10px;
      }
    }

    & > div:last-of-type {
      display: flex;
      gap: 10px;
    }
  }

  & > :last-child span {
    font-weight: bold;
  }
`;

export default ProductDetailCTA;
