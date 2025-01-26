import styled from "styled-components";
import Banner from "../ui/Banner";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import AboutFeatures from "../ui/AboutFeatures";
import Team from "../ui/Team";
import { teamData } from "../constant/constant";

function About() {
  return (
    <div>
      <Banner title={"About Us"} src={"images/banner-1.png"} />
      <MaxWidthWrapper>
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
        <WhoWeAre>
          <Left>
            <p>&mdash; Who We Are</p>
            <h1>Who We Are</h1>
            <p>
              At Ckart, we believe that your home should be a true reflection of
              your style and personality. Our mission is to provide a curated
              selection of high-quality home decor items that inspire creativity
              and comfort.
            </p>
            <p>
              Founded by a team of passionate design enthusiasts, we strive to
              make beautiful, stylish decor accessible to everyone. Whether
              you’re looking for modern accents, vintage finds, or unique
              handcrafted pieces, we’ve got something for every taste and
              budget.
            </p>
            <p>
              Our commitment to excellent customer service ensures that your
              shopping experience is smooth and enjoyable. We’re here to help
              you transform your space into a sanctuary that feels like home.
              Join us on this journey to create beautiful living environments!
              4o mini
            </p>
          </Left>
          <img src="images/who-we-are.jpg" alt="" />
        </WhoWeAre>
        <VideoWrapper>
          <Video src="images/video.png" alt="" />
        </VideoWrapper>
        <Teams>
          <p>&mdash; Team &mdash;</p>
          <h1>Meet Our Teams</h1>
          <div>
            {teamData.map((team) => (
              <Team key={team.name} team={team} />
            ))}
          </div>
        </Teams>
        <Brand>
          <img src="images/brand-1.png" alt="" />
          <img src="images/brand-2.png" alt="" />
          <img src="images/brand-3.png" alt="" />
          <img src="images/brand-4.png" alt="" />
          <img src="images/brand-5.png" alt="" />
          <img src="images/brand-6.png" alt="" />
        </Brand>
      </MaxWidthWrapper>
    </div>
  );
}

const AboutUs = styled.div`
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

const WhoWeAre = styled.div`
  display: flex;
  gap: 100px;
  padding-block: 120px;

  & > img {
    flex: 1;
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 470px;
    object-fit: cover;
  }
`;
const Left = styled.div`
  flex: 1;
  color: var(--clr-dark-100);

  h1 {
    font-size: 48px;
    line-height: 1.2;
  }

  p:not(:first-child) {
    margin-block-start: 30px;
  }
  p:first-child {
    color: var(--clr-primary-100);
    font-weight: 600;
  }
`;

const Video = styled.img`
  width: 100%;
  height: 100%;
  max-height: 700px;
  object-fit: cover;
`;

const VideoWrapper = styled.div`
  padding-block: 120px;
`;

const Teams = styled(MaxWidthWrapper)`
  text-align: center;

  & > p {
    font-weight: bold;
    color: var(--clr-primary-100);
  }
  & > h1 {
    font-size: 48px;
    line-height: 1.2;
    margin-block-end: 70px;
  }

  & > div {
    display: flex;
    gap: 30px;
  }
`;

const Brand = styled.div`
  padding-block: 120px;
  display: flex;
  align-items: center;
  gap: 40px;

  img {
    flex: 1;
  }
`;

export default About;
