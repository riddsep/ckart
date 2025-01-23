import styled from "styled-components";
import OrderItem from "./OrderItem";
import { MaxWidthWrapper } from "../../ui/MaxWidthWrapper";

function Order() {
  return (
    <Wrapper>
      <OrderItem />
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  border: 1px solid var(--clr-dark-15);
  margin-bottom: 20rem;
`;

export default Order;
