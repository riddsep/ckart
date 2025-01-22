import styled from "styled-components";
import Navbar from "./Navbar";

function Footer() {
  return (
    <Wrapper as="footer">
      <Navbar theme={"var(--clr-dark-100)"} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-dark-100);
  color: var(--clr-white-100);
`;

export default Footer;
