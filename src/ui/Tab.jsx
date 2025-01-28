import styled from "styled-components";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Tab({ children }) {
  return <Wrapper as={"ul"}>{children}</Wrapper>;
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: center;
  gap: 10px;
  border-bottom: 2px solid var(--clr-dark-15);

  li {
    padding: 16px 28px;
    color: var(--clr-dark-50);
    font-weight: bold;
    text-decoration: none;
  }
`;

export default Tab;
