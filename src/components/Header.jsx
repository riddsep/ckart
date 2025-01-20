import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Contact>
          <a href="tel:+919574468870">+91 95744 68870</a>
          <a href="mailto:uiuxocean@gmail.com">uiuxocean@gmail.com</a>
        </Contact>
        <SocialMedia>
          <LangnCurrency>
            <Lang>
              <span>Eng</span>
              <img src="icons/arrow-down.svg" alt="" />
            </Lang>
            <Curr>
              <span>USD</span>
              <img src="icons/arrow-down.svg" alt="" />
            </Curr>
          </LangnCurrency>
          <SocialMediaList>
            <li>
              <a href="">
                <img src="icons/Facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="icons/Pinterest.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="icons/Instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="icons/Twitter.svg" alt="" />
              </a>
            </li>
          </SocialMediaList>
        </SocialMedia>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  color: var(--clr-white-100);
  background-color: var(--clr-primary-100);
  padding-block: 15px;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Contact = styled.address`
  display: flex;
  gap: 16px;
`;
const SocialMedia = styled.div`
  display: flex;
  gap: 60px;
`;
const LangnCurrency = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Lang = styled.div`
  display: flex;
  gap: 12px;
`;
const Curr = styled.div`
  display: flex;
  gap: 12px;
`;
const SocialMediaList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
`;

export default Header;
