import styled from "styled-components";
import { useCart } from "../context/CartContext";

function ProductDetailCount() {
  const { count, handleClickDecrease, handleClickIncrease } = useCart();

  return (
    <Wrapper>
      <Decrease onClick={handleClickDecrease}>-</Decrease>
      <span>{count}</span>
      <Increase onClick={handleClickIncrease}>+</Increase>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  span {
    padding: 8px 18px;
    border: 1px solid var(--clr-dark-15);
  }
`;

const Decrease = styled.span`
  cursor: pointer;
  user-select: none;
`;

const Increase = styled.span`
  cursor: pointer;
  user-select: none;
`;

export default ProductDetailCount;
