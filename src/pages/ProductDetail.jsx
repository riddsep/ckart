import styled from "styled-components";
import Button from "../ui/Button";
import StarRating from "../ui/StarRating";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";

function ProductDetail() {
  return (
    <Wrapper>
      <DetailWrapper>
        <ImageWrapper>
          <div>
            <SlideImg src="/images/product-detail-2.jpg" alt="" />
            <SlideImg src="/images/product-detail-3.jpg" alt="" />
            <SlideImg src="/images/product-detail-4.jpg" alt="" />
            <SlideImg src="/images/product-detail-5.jpg" alt="" />
            <SlideImg src="/images/product-detail-6.jpg" alt="" />
          </div>
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
          <p>
            Explore our vast selection at ‘The Creative Store’- your one-stop
            destination for all construction and building needs. From the
            foundational bricks to the final touches of lighting, discover
            quality and variety like never before.
          </p>
          <p>
            Explore our vast selection at ‘The Creative Store’- your one-stop
            destination for all construction and building needs. From the
            foundational bricks to the final touches of lighting, discover
            quality and variety like never before.
          </p>
          <div>
            <div>
              <span>Qty</span>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <div>
              <Button>
                Add to Cart <img src="icons/shopping-cart-light.svg" alt="" />
              </Button>
              <Button>
                Buy Now <img src="icons/arrow-right-dark.svg" alt="" />
              </Button>
            </div>
            <p>Estimate delivery time: 12-26 days</p>
          </div>
        </DescriptionDetail>
      </DetailWrapper>
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
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  max-height: 592px;
`;

const SlideImg = styled.img`
  max-width: 126px;
  object-fit: cover;
`;
const MainImg = styled.img`
  width: 100%;
  max-width: 489px;
  max-height: 592px;
  object-fit: cover;
`;

export default ProductDetail;
