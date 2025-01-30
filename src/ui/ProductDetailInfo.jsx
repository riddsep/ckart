import styled from "styled-components";

function ProductDetailInfo() {
  return (
    <Wrapper>
      <h3>Other Information</h3>
      <p>
        <span>
          For all orders exceeding a value of 100USD shipping is offered for
          free.
        </span>
        <span>
          Returns will be accepted for up to 10 days of Customer’s receipt or
          tracking number on unworn items.
        </span>
        <span>
          You, as a Customer, are obliged to inform us via email before you
          return the item.
        </span>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline-start: 50px;

  & > h3 {
    font-size: 20px;
  }

  & > p {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default ProductDetailInfo;
