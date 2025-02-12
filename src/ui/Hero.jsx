import styled from "styled-components";
import Button from "./Button";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <Wrapper>
      <HeroContent>
        <Tagline>
          <Highlight>Elevate</Highlight> Your Space, Embrace Your{" "}
          <Highlight>Style</Highlight>.
        </Tagline>
        <Description>
          Elevate your home into a sanctuary of style and practicality with our
          extensive selection of premium fixtures, designed to meet every
          aesthetic
        </Description>
        <Button
          $variant="primary"
          $size="lg"
          as={NavLink}
          to="/shop"
          $width="fit-content"
        >
          Shop Now
          <img src="icons/arrow-right.svg" alt="Shop now icon" />
        </Button>
      </HeroContent>
      <img src="images/hero.jpg" alt="hero banner" loading="lazy" />
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  gap: 40px;
  margin-top: 30px;

  & > img {
    width: 100%;
    max-width: 600px;
  }
`;
const HeroContent = styled.div`
  width: 100%;
  max-width: 734px;
  color: var(--clr-dark-100);
  margin-block-start: 80px;
`;

const Tagline = styled.h1`
  font-size: 62px;
  line-height: 1.25;
`;

const Description = styled.p`
  font-size: 18px;
  margin-block: 30px;
`;
const Highlight = styled.em`
  color: var(--clr-primary-100);
  font-style: normal;
`;

export default Hero;
