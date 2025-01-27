import styled from "styled-components";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { useState } from "react";
import MegaMenu from "./MegaMenu";
import { NavLink } from "react-router-dom";

function Navbar({ isFooter }) {
  const [active, setActive] = useState(false);

  // Fungsi untuk menangani klik pada item navigasi
  const handleNavClick = () => {
    if (active) setActive(false); // Tutup MegaMenu jika terbuka
  };

  return (
    <Wrapper $isFooter={isFooter}>
      <Logo src={`/icons/logo-${isFooter ? "dark" : "light"}.png`} alt="Logo" />
      <NavbarList $isFooter={isFooter}>
        <li>
          <Link to="/" onClick={handleNavClick}>
            Home
          </Link>
        </li>
        <li>
          <span onClick={() => setActive(!active)}>
            Shop{" "}
            <Img
              src="/icons/chevron-down-dark.svg"
              alt="Dropdown Icon"
              $isFooter={isFooter}
            />
          </span>
        </li>
        {isFooter && (
          <li>
            <Link href="#" as="a" onClick={handleNavClick}>
              Products
            </Link>
          </li>
        )}
        <li>
          <Link to="aboutus" onClick={handleNavClick}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="contactus" onClick={handleNavClick}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="blog" onClick={handleNavClick}>
            Blog
          </Link>
        </li>

        {active && <MegaMenu onClose={() => setActive(false)} />}

        {!isFooter && (
          <>
            <li>
              <Link href="#" as="a" onClick={handleNavClick}>
                <img src="/icons/search-normal.svg" alt="Search" />
              </Link>
            </li>
            <li>
              <Link href="#" as="a" onClick={handleNavClick}>
                <img src="/icons/shopping-cart.svg" alt="Shopping Cart" />
                <CountItem>5</CountItem>
              </Link>
            </li>
            <li>
              <Link href="#" as="a" onClick={handleNavClick}>
                <img src="/icons/heart.svg" alt="Favorite" />
              </Link>
            </li>
            <li>
              <Link href="#" as="a" onClick={handleNavClick}>
                <img src="/icons/user.svg" alt="User" />
              </Link>
            </li>
          </>
        )}
      </NavbarList>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-block: ${(props) => (!props.$isFooter ? "20px" : "")};
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
  li span {
    display: flex;
    gap: 5px;
    cursor: pointer;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  position: relative;

  &.active {
    color: var(--clr-primary-100);
    text-decoration: underline;
    text-underline-offset: 6px;
  }
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

const Img = styled.img`
  display: ${(props) => (props.$isFooter ? "none" : "block")};
`;

export default Navbar;
