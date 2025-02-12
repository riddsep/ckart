import styled from "styled-components";

function SocialMedia() {
  return (
    <Wrapper>
      <li>
        <a href="#">
          <img src="/icons/facebook.svg" alt="facebook icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/pinterest.svg" alt="pinterest icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/instagram.svg" alt="instagram icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/twitter.svg" alt="twitter icon" />
        </a>
      </li>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  list-style-type: none;
`;

export default SocialMedia;
