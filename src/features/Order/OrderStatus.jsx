import styled from "styled-components";
import Chip from "../../ui/Chip";

function OrderStatus() {
  return (
    <Wrapper>
      <Queu>
        <Chip>Order : #125424</Chip>
        <p>15 Jun, 2022</p>
      </Queu>
      <Chip state={"completed"}>Completed</Chip>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--clr-dark-15);
`;

const Queu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default OrderStatus;
