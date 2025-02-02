import styled from "styled-components";
import Banner from "../../ui/Banner";
import OrderTab from "./OrderTab";
import OrderItem from "./OrderItem";
import { MaxWidthWrapper } from "../../ui/MaxWidthWrapper";

function OrderMain() {
  return (
    <>
      <Banner src="/images/banner-1.png" title="Your Order" />
      <Wrapper>
        <OrderTab />
        <OrderWrapper>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </OrderWrapper>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin-block-start: 50px;
  margin-block-end: 120px;
`;
const OrderWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export default OrderMain;
