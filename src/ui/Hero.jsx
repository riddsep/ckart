import styled from "styled-components";
import Button from "./Button";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Hero() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <HeroContent>
          <Title>Love Your Space</Title>
          <Tagline>
            <Highlight>Elevate</Highlight> Your Space, Embrace Your{" "}
            <Highlight>Style</Highlight>.
          </Tagline>
          <Description>
            Elevate your home into a sanctuary of style and practicality with
            our extensive selection of premium fixtures, designed to meet every
            aesthetic
          </Description>
          <Button $size="large" $varint="primary">
            Shop Now
            <img src="icons/arrow-right.svg" alt="" />
          </Button>
        </HeroContent>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-image: url("images/hero.png");
  min-height: calc(100% - 152.4px);
  color: var(--clr-white-100);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
`;
const HeroContent = styled.div`
  width: 100%;
  max-width: 734px;
`;
const Title = styled.h1`
  font-size: 45px;
  font-family: "Playwrite IN", serif;
  font-weight: 400;
  font-style: italic;
`;
const Tagline = styled.h1`
  font-size: 62px;
  line-height: 1.25;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-block: 30px;
`;
const Highlight = styled.em`
  color: var(--clr-primary-100);
  font-style: normal;
`;

export default Hero;
