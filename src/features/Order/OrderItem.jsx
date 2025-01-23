import styled from "styled-components";
import OrderProduct from "./OrderProduct";
import OrderStatus from "./OrderStatus";
import OrderResume from "./OrderResume";

function OrderItem() {
  return (
    <Wrapper>
      <OrderStatus />
      <OrderProduct />
      <OrderProduct />
      <OrderResume />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default OrderItem;
