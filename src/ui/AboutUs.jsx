import styled from "styled-components";

import { MaxWidthWrapper } from "./MaxWidthWrapper";
import Avatar from "./Avatar";

function AboutUs() {
  return (
    <Wrapper>
      <LeftContent>
        <Left>
          <Img src="images/about-1.jpg" alt="" />
          <Experienced>
            <Em>25+</Em>
            Years of Experienced
          </Experienced>
        </Left>
        <img src="images/about-2.png" alt="" />
      </LeftContent>
      <RightContent>
        <Header>&mdash; About Us</Header>
        <Title>Safe, Reliable & Empress Moving Solutions!</Title>
        <Description>
          Explore our vast selection at ‘The Creative Store’- your one-stop
          destination for all construction and building needs. From the
          foundational bricks to the final touches of lighting, discover quality
          and variety like never before.
        </Description>
        <List>
          <li>Creative Work Insight</li>
          <li>Always Work With Energetic Team</li>
          <li>We are Award Winning Company</li>
        </List>
        <Avatar />
      </RightContent>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-block: 7.5rem;
  display: flex;
  gap: 65px;
`;
const LeftContent = styled.div`
  flex: 1;
`;
const RightContent = styled.div`
  flex: 1;
  color: var(--clr-dark-100);
`;

const Left = styled.div`
  display: flex;
  gap: 50px;
  margin-block-end: 40px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 394px;
`;

const Experienced = styled.div`
  background-color: var(--clr-primary-100);
  color: var(--clr-white-100);
  padding: 20px;
  font-size: 20px;
  align-self: start;
`;
const Em = styled.em`
  font-size: 60px;
  line-height: 1.2;
  font-weight: bold;
  font-style: normal;
  display: block;
`;
const Header = styled.p`
  font-weight: 600;
  margin-block-end: 15px;
  color: var(--clr-primary-100);
`;
const Title = styled.h1`
  font-size: 48px;
  line-height: 1.25;
`;
const Description = styled.p`
  margin-block: 30px;
`;
const List = styled.ul`
  list-style-type: none;
  margin-block-end: 30px;
  padding: 0;

  li {
    display: flex;
    align-items: top;
    gap: 10px;
  }
  li::before {
    content: url("icons/verify.svg");
  }
`;

export default AboutUs;
