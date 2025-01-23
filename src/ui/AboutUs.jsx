import styled from "styled-components";

import { MaxWidthWrapper } from "./MaxWidthWrapper";

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
        <p>About Us</p>
        <h1>Safe, Reliable & Empress Moving Solutions!</h1>
        <p>
          Explore our vast selection at ‘The Creative Store’- your one-stop
          destination for all construction and building needs. From the
          foundational bricks to the final touches of lighting, discover quality
          and variety like never before.
        </p>
        <ul>
          <li>Creative Work Insight</li>
          <li>Always Work With Energetic Team</li>
          <li>We are Award Winning Company</li>
        </ul>
        <div>
          <img src="avatar-1.png" alt="" />
          <div>
            <h1>Kaitlyn Grieve</h1>
            <p>Co-Founder</p>
          </div>
        </div>
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

export default AboutUs;
