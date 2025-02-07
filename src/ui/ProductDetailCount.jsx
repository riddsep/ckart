import styled from "styled-components";

function ProductDetailCount({
  quantity,
  onDecreaseQuantity,
  onIncreaseQuantity,
}) {
  return (
    <Wrapper>
      <Decrease onClick={onDecreaseQuantity}>-</Decrease>
      <span>{quantity}</span>
      <Increase onClick={onIncreaseQuantity}>+</Increase>
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
