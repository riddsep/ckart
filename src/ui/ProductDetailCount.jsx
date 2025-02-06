import styled from "styled-components";

function ProductDetailCount({ count, setCount, product }) {
  const handleIncrease = () => {
    if (count + 1 > product.stock) return;
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (count - 1 === 0) return;
    setCount((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <Decrease onClick={handleDecrease}>-</Decrease>
      <span>{count}</span>
      <Increase onClick={handleIncrease}>+</Increase>
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
