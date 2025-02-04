import styled from "styled-components";

function ProductDetailCount({ setCount, count, product }) {
  const handleClickDecrease = () => {
    if (count - 1 === 0) return;
    setCount((prev) => prev - 1);
  };
  const handleClickIncrease = () => {
    if (count + 1 > product.stock) return;
    setCount((prev) => prev + 1);
  };
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
