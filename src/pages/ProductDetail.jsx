import styled, { css } from "styled-components";
import Button from "../ui/Button";
import StarRating from "../ui/StarRating";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import Tab from "../ui/Tab";
import { tabProductDetails } from "../constant/constant";
import { useState } from "react";

function ProductDetail() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper>
      <DetailWrapper>
        <ImageWrapper>
          <SlideWrapper>
            <SlideImg src="/images/product-detail-2.jpg" alt="" />
            <SlideImg src="/images/product-detail-3.jpg" alt="" />
            <SlideImg src="/images/product-detail-4.jpg" alt="" />
            <SlideImg src="/images/product-detail-5.jpg" alt="" />
            <SlideImg src="/images/product-detail-6.jpg" alt="" />
          </SlideWrapper>
          <div>
            <MainImg src="/images/product-detail-1.png" alt="" />
          </div>
        </ImageWrapper>
        <DescriptionDetail>
          <p>Furniture</p>
          <h1>Pilke Wooden Storage</h1>
          <div>
            <StarRating />
            <p>(145 Reviews)</p>
          </div>
          <div>
            <p>$ 245.52</p>
            <p>$ 22.52</p>
          </div>
          <ProductParagraph>
            <span>
              Explore our vast selection at ‘The Creative Store’- your one-stop
              destination for all construction and building needs. From the
              foundational bricks to the final touches of lighting, discover
              quality and variety like never before.
            </span>
            <span>
              Explore our vast selection at ‘The Creative Store’- your one-stop
              destination for all construction and building needs. From the
              foundational bricks to the final touches of lighting, discover
              quality and variety like never before.
            </span>
          </ProductParagraph>

          <CallToAction>
            <div>
              <div>
                <span>Qty</span>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div>
                <Button $variant="primary">
                  Add to Cart{" "}
                  <img src="/icons/shopping-cart-light.svg" alt="" />
                </Button>
                <Button $variant="outline">
                  Buy Now <img src="/icons/arrow-right-dark.svg" alt="" />
                </Button>
              </div>
            </div>
            <p>
              Estimate delivery time: <span>12-26 days</span>
            </p>
          </CallToAction>
        </DescriptionDetail>
      </DetailWrapper>
      <ProductDescription>
        <Tab>
          {tabProductDetails.map((tab, index) => (
            <TabItem
              key={index}
              onClick={() => setActiveIndex(index)}
              $active={activeIndex === index}
            >
              {tab}
            </TabItem>
          ))}
        </Tab>
        <div>
          {activeIndex === 0 && (
            <>
              <p>
                Home is where the heart is, and your decor should reflect your
                personality and create a welcoming atmosphere. Whether you’re
                moving into a new place or just looking to refresh your existing
                space, there are countless ways to infuse style and comfort into
                your home. Here are some tips to elevate your decor and make
                your home feel uniquely yours.
              </p>
              <h3></h3>
            </>
          )}
        </div>
      </ProductDescription>
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

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
`;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%; /* Pastikan tingginya sama dengan MainImg */
`;

const SlideImg = styled.img`
  flex: 1; /* Membagi tinggi secara proporsional */
  max-width: 126px;
  max-height: 110px;
  object-fit: cover;
`;

const MainImg = styled.img`
  flex: 1;
  width: 100%;
  max-width: 592px;
  height: 100%;
  object-fit: cover;
`;

const ProductParagraph = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--clr-dark-15);
`;
const CallToAction = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    padding-block-end: 30px;
    margin-block-end: 30px;
    border-bottom: 1px solid var(--clr-dark-15);

    & > div {
      display: flex;
      align-items: center;

      span:not(:first-of-type) {
        padding: 8px 18px;
        border: 1px solid var(--clr-dark-15);
      }

      span:first-of-type {
        margin-right: 10px;
      }
    }

    & > div:last-of-type {
      display: flex;
      gap: 10px;
    }
  }

  & > :last-child span {
    font-weight: bold;
  }
`;

const TabItem = styled.li`
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      color: var(--clr-primary-100);
      border-bottom: 2px solid var(--clr-primary-100);
      margin-bottom: -2px;
    `}
`;

const ProductDescription = styled.div``;

export default ProductDetail;
