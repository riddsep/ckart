import styled, { css } from "styled-components";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Tab() {
  return (
    <Wrapper as={"ul"}>
      <TabItem $active>All Orders</TabItem>
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
  border-bottom: 2px solid var(--clr-dark-15);
`;
const TabItem = styled.li`
  padding: 16px 28px;
  color: var(--clr-dark-50);
  font-weight: bold;

  ${(props) =>
    props.$active &&
    css`
      color: var(--clr-primary-100);
      border-bottom: 2px solid var(--clr-primary-100);
      margin-bottom: -2px;
    `}
`;

export default Tab;
