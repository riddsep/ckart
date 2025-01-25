import styled from "styled-components";
import Avatar from "./Avatar";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Testimonial() {
  return (
    <Background>
      <Wrapper>
        <div>
          <Heading>&mdash;Testimonials</Heading>
          <Title>What Our Customer Say</Title>
          <img src="icons/quote-up.svg" alt="" />
          <Description>
            <p>
              I recently shopped at Ckart and had a fantastic experience! The
              selection is impressive, catering to various styles, and I found
              unique pieces that enhanced my home beautifully.
            </p>
            <p>
              The website is user-friendly, with high-quality images and
              detailed descriptions that made shopping easy. Customer service
              was prompt and helpful when I had questions, and my order arrived
              quickly and well-packaged.
            </p>
          </Description>
          <Avatar />
          <Slide>
            <SlideButton $active></SlideButton>
            <SlideButton></SlideButton>
            <SlideButton></SlideButton>
          </Slide>
        </div>
        <img src="images/testimoni-1.jpg" alt="" />
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  background-color: var(--clr-primary-100);
  overflow-x: hidden;
`;

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  gap: 100px;
  color: var(--clr-white-100);

  & > div {
    padding-block: 120px;
    flex: 1;
  }
  & > img {
    flex: 1;
    object-fit: cover;
    width: 100%;
    max-width: 750px;
    margin-right: -120px;
  }
`;

const Heading = styled.h1`
  font-size: 1rem;
`;
const Title = styled.h1`
  font-size: 48px;
  line-height: 1.2;

  & + img {
    margin-block: 30px;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-block-end: 30px;
`;

const Slide = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const SlideButton = styled.div`
  width: 20px;
  height: 5px;
  border-radius: 15px;
  background-color: var(--clr-white-100);
  opacity: ${(props) => (props.$active ? 1 : 0.5)};
  cursor: pointer;
`;

export default Testimonial;
