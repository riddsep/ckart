import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Strip() {
  return (
    <Wrapper>
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
            <img src="/icons/chevron-down.svg" alt="Language selector" />
          </Lang>
          <Curr>
            <span>USD</span>
            <img src="/icons/chevron-down.svg" alt="Currency selector" />
          </Curr>
        </LangnCurrency>
        <SocialMedia />
      </RightSection>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
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
    content: url("/icons/call-calling.svg");
  }
  &:last-child::before {
    content: url("/icons/sms.svg");
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

  & > div:first-of-type:hover,
  & > div:last-of-type:hover {
    cursor: pointer;
  }
`;

const Lang = styled.div`
  display: flex;
  gap: 10px;
`;

const Curr = styled.div`
  display: flex;
  gap: 10px;
`;

export default Strip;
