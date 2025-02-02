import styled from "styled-components";
import ShowingProducts from "./ShowingProducts";
import Button from "./Button";
function Pagination() {
  return (
    <Wrapper>
      <ShowingProducts />
      <div>
        <Button $variant="outline" $size="sm">
          <img src="icons/arrow-left.svg" alt="" />
        </Button>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>10</span>
        <Button $variant="outline" $size="sm">
          <img src="icons/chevron-right-dark.svg" alt="" />
        </Button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    span {
      cursor: pointer;
      border: 1px solid var(--clr-dark-15);
      padding: 10px 20px;
    }
  }
`;

export default Pagination;
