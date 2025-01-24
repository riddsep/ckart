import styled from "styled-components";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { useState } from "react";
import MegaMenu from "./MegaMenu";

function Navbar({ theme }) {
  const [active, setActive] = useState(false);

  return (
    <Wrapper $theme={theme}>
      <Logo src={`icons/logo-${theme ? "dark" : "light"}.png`} alt="Logo" />
      <NavbarList $theme={theme}>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#" onClick={() => setActive(!active)}>
            Shop <img src="icons/chevron-down-dark.svg" alt="Dropdown Icon" />
          </Link>
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

        {active && <MegaMenu />}

        {!theme && (
          <>
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
          </>
        )}
      </NavbarList>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-block: ${(props) => (!props.$theme ? "20px" : "")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Logo = styled.img`
  width: 156px;
`;
const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style-type: none;

  li:nth-child(2) a {
    display: flex;
    gap: 5px;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
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
