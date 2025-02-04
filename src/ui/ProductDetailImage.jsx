import styled from "styled-components";

function ProductDetailImage({ productImage }) {
  return (
    <Wrapper>
      <SlideWrapper>
        <SlideImg src="/images/product-detail-2.jpg" alt="" />
        <SlideImg src="/images/product-detail-3.jpg" alt="" />
        <SlideImg src="/images/product-detail-4.jpg" alt="" />
        <SlideImg src="/images/product-detail-5.jpg" alt="" />
        <SlideImg src="/images/product-detail-6.jpg" alt="" />
      </SlideWrapper>
      <div>
        <MainImg src={productImage[0]} alt="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
`;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SlideImg = styled.img`
  flex: 1;
  max-width: 126px;
  object-fit: cover;
  cursor: pointer;
`;

const MainImg = styled.img`
  flex: 1;
  width: 100%;
  max-width: 592px;
  height: 100%;
  object-fit: cover;
`;

export default ProductDetailImage;
