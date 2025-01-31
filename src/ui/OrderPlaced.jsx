import styled from "styled-components";
import Button from "./Button";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { NavLink } from "react-router-dom";

function OrderPlaced() {
  return (
    <Wrapper>
      <img src="/icons/tick-circle.svg" alt="" />
      <h1>Order Placed</h1>
      <p>
        We are pleased to inform you that your order has been successfully
        placed. Thank you for choosing us!
      </p>
      <div>
        <Button $variant="primary">View Orders</Button>
        <Button $variant="outline" as={NavLink} to={"/"}>
          Back to Home
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 406px;
  text-align: center;
  margin-block: 163px;

  & h1 {
    font-size: 20px;
    margin-block-start: 20px;
    margin-block-end: 10px;
  }

  & div {
    display: flex;
    gap: 20px;
  }
  & p {
    margin-block-end: 30px;
  }
`;

export default OrderPlaced;
