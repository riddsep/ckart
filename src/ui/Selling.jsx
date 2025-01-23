import styled from "styled-components";
import Button from "./Button";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function Selling() {
  return (
    <Wrapper>
      <div>
        <img src="images/selling.png" alt="" />
        <Caption>There is Best place for professional moving services.</Caption>
      </div>
      <div>
        <Heading>
          <p>&mdash; Selling</p>
          <h1>We Sell Everything.</h1>
        </Heading>
        <p>
          <span>
            Explore our vast selection at ‘The Creative Store’- your one-stop
            destination for all construction and building needs. From the
            foundational bricks to the final touches of lighting, discover
            quality and variety like never before.
          </span>{" "}
          Explore our vast selection at ‘The Creative Store’- your one-stop
          destination for all construction and building needs. From the
          foundational bricks to the final touches of lighting, discover quality
          and variety like never before.
        </p>
        <Button $variant="primary" $size="lg">
          Explore
          <img src="icons/arrow-right.svg" alt="" />
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  gap: 50px;
  padding-block: 120px;

  & > div {
    flex: 1;
    position: relative;

    img {
      width: 100%;
    }
  }
`;
const Caption = styled.p`
  font-size: 20px;
  color: var(--clr-white-100);
  font-weight: bold;
  padding: 30px 45px;
  background-color: var(--clr-primary-100);
  width: 100%;
  max-width: 415px;
  text-align: center;
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Heading = styled.div`
  margin-block-end: 30px;

  p {
    color: var(--clr-primary-100);
    font-weight: bold;
  }
  h1 {
    font-size: 48px;
  }

  & + p {
    padding-block-end: 30px;
    margin-block-end: 30px;
    border-bottom: 1px solid var(--clr-dark-15);
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export default Selling;
