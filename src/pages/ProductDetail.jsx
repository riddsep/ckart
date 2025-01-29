import styled from "styled-components";
import Button from "../ui/Button";
import StarRating from "../ui/StarRating";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import { products, reviews } from "../constant/constant";
import { useState } from "react";
import Product from "../ui/Product";
import ProductDetailImage from "../ui/ProductDetailImage";
import ProductDetailHeader from "../ui/ProductDetailHeader";
import ProductDetailParagraph from "../ui/ProductDetailParagraph";
import ProductDetailCTA from "../ui/ProductDetailCTA";
import ProductDetailReview from "../ui/ProductDetailReview";
import ProductDetailTab from "../ui/ProductDetailTab";
import ProductDetailMainDesc from "../ui/ProductDetailMainDesc";
import ProductDetailFeature from "../ui/ProductDetailFeature";
import ProductDetailShipping from "../ui/ProductDetailShipping";
import ProductDetailInfo from "../ui/ProductDetailInfo";

function ProductDetail() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper>
      <DetailWrapper>
        <ProductDetailImage />
        <DescriptionDetail>
          <ProductDetailHeader />
          <ProductDetailParagraph />
          <ProductDetailCTA />
        </DescriptionDetail>
      </DetailWrapper>
      <div>
        <ProductDetailTab
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <TabContent>
          {activeIndex === 0 && <ProductDetailMainDesc />}
          {activeIndex === 1 && (
            <AdditionalInfo>
              <ProductDetailFeature />
              <ProductDetailShipping />
              <ProductDetailInfo />
            </AdditionalInfo>
          )}
          {activeIndex === 2 && (
            <Reviews>
              <ReviewList>
                {reviews.map((review) => (
                  <ProductDetailReview key={review.id} review={review} />
                ))}
              </ReviewList>
              <AddReviews>
                <h3>Add Review</h3>
                <form>
                  <div>
                    <label htmlFor="name">
                      Name
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                    </label>
                    <label htmlFor="email">
                      Email
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                    </label>
                  </div>
                  <StarRating />
                  <label htmlFor="message">
                    Message
                    <textarea
                      id="message"
                      placeholder="Write Your Message Here"
                    />
                  </label>
                  <Button $fullWidth $variant="primary">
                    Submit <img src="/icons/arrow-right.svg" alt="" />
                  </Button>
                </form>
              </AddReviews>
            </Reviews>
          )}
        </TabContent>
        <RelatedProductList>
          <p>&mdash; Product &mdash;</p>
          <h1>Related Product</h1>
          <ProductList>
            {products.slice(0, 4).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductList>
        </RelatedProductList>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)``;
const DetailWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-block-start: 50px;
  margin-block-end: 80px;
`;
const DescriptionDetail = styled.div`
  flex: 1;

  & > p:first-of-type {
    color: var(--clr-primary-100);
    text-transform: uppercase;
  }

  & > h1 {
    font-size: 24px;
    margin-block: 10px;
  }

  & > div:first-of-type {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-block-end: 30px;
  }

  & > div:nth-of-type(2) {
    display: flex;
    gap: 10px;
    padding-block-end: 30px;
    margin-block-end: 30px;
    border-bottom: 1px solid var(--clr-dark-15);

    p {
      font-size: 30px;
      font-weight: bold;

      &:last-child {
        text-decoration: line-through;
        color: var(--clr-dark-15);
      }
    }
  }
`;

const TabContent = styled.div`
  margin-block-start: 50px;
  margin-block-end: 80px;
`;

const RelatedProductList = styled.div`
  margin-block-end: 120px;

  & > p {
    color: var(--clr-primary-100);
    font-weight: 600;
    text-align: center;
  }
  & > h1 {
    font-size: 48px;
    text-align: center;
    margin-block-end: 70px;
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const AdditionalInfo = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }
`;

const Reviews = styled.div`
  display: flex;
  gap: 30px;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddReviews = styled.div`
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

export default ProductDetail;
