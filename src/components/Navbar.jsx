import styled from "styled-components";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Navbar() {
  return (
    <Background>
      <Wrapper>
        <Logo src="icons/logo-white.png" alt="Logo" className="" />
        <NavbarList>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Shop</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>

          <li>
            <Link href="#">
              <img src="icons/search-normal.svg" alt="Search" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="icons/shopping-cart.svg" alt="Shopping Cart" />
              <CountItem>5</CountItem>
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="icons/heart.svg" alt="Favorite" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="icons/user.svg" alt="User" />
            </Link>
          </li>
        </NavbarList>
      </Wrapper>
    </Background>
  );
}
const Background = styled.div`
  background-color: var(--clr-white-100);
`;

const Wrapper = styled(MaxWidthWrapper)`
  padding-block: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 156px;
`;
const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style-type: none;

  li:nth-child(5) {
    border-right: 2px solid var(--clr-primary-100);
    padding-right: 28px;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: var(--clr-dark-100);
  position: relative;
`;

const CountItem = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--clr-white-100);
  color: var(--clr-primary-100);
  border: 2px solid var(--clr-primary-100);
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export default Navbar;
