import styled from "styled-components";
import StarRating from "./StarRating";

function Review() {
  return (
    <Wrapper>
      <UserDetail>
        <img src="/images/avatar-1.png" alt="" />
        <div>
          <h3>Kaitlyn Grieve</h3>
          <div>
            <StarRating />
            <p>11 Nov 2024</p>
          </div>
        </div>
      </UserDetail>
      <p>
        Explore our vast selection at ‘The Creative Store’- your one-stop
        destination for all construction and building needs. From the
        foundational bricks to the final touches of lighting, discover quality
        and variety like never before.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-block-end: 20px;
  border-bottom: 1px solid var(--clr-dark-15);
`;
const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-block-end: 20px;

  & img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  & h3 {
    font-size: 16px;
  }

  & > div div {
    display: flex;
    align-items: center;

    p {
      margin-inline-start: 10px;
    }
  }
`;

export default Review;
