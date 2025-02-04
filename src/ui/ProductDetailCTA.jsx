import styled from "styled-components";
import Button from "./Button";
import ProductDetailCount from "./ProductDetailCount";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function ProductDetailCTA({ product }) {
  const [count, setCount] = useState(1);

  return (
    <CallToAction>
      <div>
        <ProductDetailCount
          setCount={setCount}
          count={count}
          product={product}
        />
        <div>
          <Button $variant="primary" as={NavLink} to={"/shop/cart"}>
            Add to Cart <img src="/icons/shopping-cart-light.svg" alt="" />
          </Button>
          <Button $variant="outline" as={NavLink} to={"/shop/checkout"}>
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
