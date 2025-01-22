import styled from "styled-components";
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper";
import Chip from "../../components/Chip";
import OrderProduct from "./OrderProduct";

function OrderItem() {
  return (
    <Wrapper>
      <Head>
        <Queu>
          <Chip>Order : #125424</Chip>
          <p>15 Jun, 2022</p>
        </Queu>
        <Chip state={"completed"}>Completed</Chip>
      </Head>
      <OrderProduct />
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  margin-bottom: 400px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Queu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default OrderItem;
