import styled from "styled-components";
import Button from "./Button";
import StarRating from "./StarRating";

function ProductDetailAddReviews() {
  return (
    <Wrapper>
      <h3>Add Review</h3>
      <form>
        <div>
          <label htmlFor="name">
            Name
            <input type="text" id="name" placeholder="Enter Your Name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" id="email" placeholder="Enter Your Email" />
          </label>
        </div>
        <StarRating />
        <label htmlFor="message">
          Message
          <textarea id="message" placeholder="Write Your Message Here" />
        </label>
        <Button $fullWidth $variant="primary">
          Submit <img src="/icons/arrow-right.svg" alt="" />
        </Button>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 20px;

  h3 {
    font-size: 24px;
    margin-block-end: 30px;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  & form label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
  }
  & form input {
    padding: 10px 20px;
    border: 1px solid var(--clr-dark-15);

    &::placeholder {
      font-weight: 400;
    }
  }

  & form textarea {
    padding: 10px 20px;
    border: 1px solid var(--clr-dark-15);
    resize: none;
    height: 100px;

    &::placeholder {
      font-weight: 400;
    }
  }
  & form div:first-of-type {
    display: flex;
    gap: 20px;
  }
`;
export default ProductDetailAddReviews;
