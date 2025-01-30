import styled from "styled-components";
import { reviews } from "../constant/constant";
import ProductDetailReview from "./ProductDetailReview";

function ProductDetailReviewList() {
  return (
    <Wrapper>
      {reviews.map((review) => (
        <ProductDetailReview key={review.id} review={review} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ProductDetailReviewList;
