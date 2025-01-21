import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import Navbar from "./Navbar";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

const socialMediaData = [
  { name: "facebook", href: "#", src: "icons/facebook.svg" },
  { name: "pinterest", href: "#", src: "icons/pinterest.svg" },
  { name: "instagram", href: "#", src: "icons/instagram.svg" },
  { name: "twitter", href: "#", src: "icons/twitter.svg" },
];

function Header() {
  return (
    <Wrapper>
      <TopBar>
        <Contact>
          <ContactLink href="tel:+919574468870">+91 95744 68870</ContactLink>
          <ContactLink href="mailto:uiuxocean@gmail.com">
            uiuxocean@gmail.com
          </ContactLink>
        </Contact>
        <RightSection>
          <LangnCurrency>
            <Lang>
              <span>Eng</span>
              <img src="icons/chevron-down.svg" alt="Language selector" />
            </Lang>
            <Curr>
              <span>USD</span>
              <img src="icons/chevron-down.svg" alt="Currency selector" />
            </Curr>
          </LangnCurrency>
          <SocialMedia socialMediaData={socialMediaData} />
        </RightSection>
      </TopBar>

      <Navbar />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  color: var(--clr-white-100);
  background-color: var(--clr-primary-100);
`;

const TopBar = styled(MaxWidthWrapper)`
  padding-block: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Contact = styled.address`
  display: flex;
  gap: 30px;
  font-style: normal;
`;

const ContactLink = styled.a`
  color: var(--clr-white-100);
  text-decoration: none;
  display: flex;
  gap: 10px;

  &:first-child::before {
    content: url("icons/call-calling.svg");
  }
  &:last-child::before {
    content: url("icons/sms.svg");
  }
`;

const RightSection = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

const LangnCurrency = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Lang = styled.div`
  display: flex;
  gap: 10px;
`;

const Curr = styled.div`
  display: flex;
  gap: 10px;
`;

export default Header;
