import styled from "styled-components";
import Navbar from "./Navbar";
import Strip from "./Strip";

function Header() {
  return (
    <Wrapper>
      <Strip />
      <NavWrapper>
        <Navbar />
      </NavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-primary-100);
  color: var(--clr-white-100);
`;
const NavWrapper = styled.div`
  background-color: var(--clr-white-100);
  color: var(--clr-dark-100);
`;

export default Header;
