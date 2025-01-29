import styled from "styled-components";

function ProductDetailCount() {
  return (
    <Wrapper>
      <Decrease>-</Decrease>
      <span>1</span>
      <Increase>+</Increase>
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
`;

const Increase = styled.span`
  cursor: pointer;
`;

export default ProductDetailCount;
