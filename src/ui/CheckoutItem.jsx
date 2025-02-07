import styled from "styled-components";

import { MaxWidthWrapper } from "./MaxWidthWrapper";
import BillingInformation from "./BillingInformation";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";

function CheckoutItem() {
  return (
    <Wrapper>
      <h1>Checkout</h1>
      <Main>
        <div>
          <BillingInformation />
          <PaymentMethod />
        </div>
        <OrderSummary />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  & h1 {
    margin-block: 50px;
    font-size: 30px;
  }
`;

const Main = styled.div`
  display: flex;
  gap: 30px;

  & div {
    flex: 1;
  }

  & > div:last-of-type {
    border: 1px solid var(--clr-dark-15);
    margin-block-end: 30px;
    max-width: 407px;
    align-self: flex-start;
  }
`;

export default CheckoutItem;
