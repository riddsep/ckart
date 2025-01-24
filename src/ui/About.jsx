import styled from "styled-components";
import Banner from "./Banner";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import AboutFeatures from "./AboutFeatures";

function About() {
  return (
    <div>
      <Banner />
      <AboutUs>
        <AboutUsImg src="images/image-2.jpg" alt="" />
        <Right>
          <Title>&mdash; About Us</Title>
          <Header>Safe, Reliable & Empress Moving Solutions!</Header>
          <Description>
            Explore our vast selection at ‘The Creative Store’- your one-stop
            destination for all construction and building needs. From the
            foundational bricks to the final touches of lighting, discover
            quality and variety like never before.
          </Description>
          <AboutFeatures />
        </Right>
      </AboutUs>
    </div>
  );
}

const AboutUs = styled(MaxWidthWrapper)`
  display: flex;
  gap: 100px;
  padding-block: 120px;
`;

const AboutUsImg = styled.img`
  flex: 1;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 470px;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
`;

const Title = styled.p`
  color: var(--clr-primary-100);
  font-weight: 600;
`;
const Header = styled.h1`
  font-size: 48px;
  line-height: 1.2;
  margin-block-start: 10px;
`;
const Description = styled.p`
  margin-block: 30px;
`;

export default About;
