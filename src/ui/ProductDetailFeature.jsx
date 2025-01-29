import styled from "styled-components";

function ProductDetailFeature() {
  return (
    <Wrapper>
      <h3>Feature</h3>
      <div>
        <img src="/icons/warranty.svg" alt="" />
        <span>Free 1-Year Warranty</span>
      </div>
      <div>
        <img src="/icons/free-shipping.svg" alt="" />
        <span>Free Shipping & Fasted Delivery</span>
      </div>
      <div>
        <img src="/icons/money-back.svg" alt="" />
        <span>100% Money-back guarantee</span>
      </div>
      <div>
        <img src="/icons/customer-support.svg" alt="" />
        <span>24/7 Customer support</span>
      </div>
      <div>
        <img src="/icons/secure-payment.svg" alt="" />
        <span>Secure payment method</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline-end: 50px;

  & > h3 {
    font-size: 20px;
  }

  & > div {
    display: flex;
    gap: 10px;
  }
`;

export default ProductDetailFeature;
