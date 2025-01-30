import styled from "styled-components";

function ProductDetailShipping() {
  return (
    <Wrapper>
      <h3>Shipping Information</h3>
      <p>
        Courier: <span>2 - 4 days, free shipping</span>
      </p>
      <p>
        Local Shipping: <span>up to one week, ₹19.00</span>
      </p>
      <p>
        UPS Ground Shipping: <span>4 - 6 days, ₹29.00</span>
      </p>
      <p>
        Unishop Global Export: <span> 3 - 4 days, ₹39.00</span>
      </p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline: 50px;
  border-inline: 1px solid var(--clr-dark-15);

  & > h3 {
    font-size: 20px;
  }
  & > p span {
    font-weight: bold;
  }
`;
export default ProductDetailShipping;
