import styled from "styled-components";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Tab() {
  return (
    <Wrapper as={"ul"}>
      <TabItem>All Orders</TabItem>
      <TabItem>Pending Orders</TabItem>
      <TabItem>Completed Orders</TabItem>
      <TabItem>Cancelled Orders</TabItem>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: center;
  gap: 10px;
  margin-block-end: 10rem;
`;
const TabItem = styled.li`
  padding: 16px 28px;
  border-bottom: 2px solid var(--clr-primary-100);
`;

export default Tab;
