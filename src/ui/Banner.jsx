import styled from "styled-components";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Banner({ src, title }) {
  return (
    <Wrapper>
      <Header>
        <BannerImg
          src={src}
          alt={`${title} banner`}
          loading="lazy"
          height={400}
        />
        <BannerDesc>
          <h1>Love Your Space</h1>
          <h1>{title}</h1>
        </BannerDesc>
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Header = styled.div`
  position: relative;
  z-index: -1;
  color: var(--clr-white-100);

  h1:nth-child(1) {
    font-family: "Playwrite IN", sans-serif;
    font-size: 52px;
    font-weight: 300;
  }

  h1:nth-child(2) {
    font-size: 72px;
    color: var(--clr-primary-100);
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  filter: brightness(50%) contrast(100%);
`;

const BannerDesc = styled(MaxWidthWrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Banner;
