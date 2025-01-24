import styled from "styled-components";
import Navbar from "./Navbar";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import FooterList from "./FooterList";
import { menuGroups } from "../constant/constant";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <Wrapper as="footer">
      <Navbar theme={"true"} />
      <Menus>
        {menuGroups.map((menu) => (
          <FooterList key={menu.title} menu={menu} />
        ))}
      </Menus>
      <CopyRight>
        <p>© 2024 All rights reserved by UIUX Ocean Design Agency</p>
        <SocialMedia />
      </CopyRight>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-dark-100);
  color: var(--clr-white-100);
  padding-block: 30px;
`;

const Menus = styled(MaxWidthWrapper)`
  border-block: 1px solid var(--clr-white-15);
  padding-block: 30px;
  margin-block: 30px;
  display: flex;
  gap: 30px;
`;

const CopyRight = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

export default Footer;
