import styled from "styled-components";

function ProductDetailImage(images) {
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
        <MainImg src={images.images?.[0]} alt="" />
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

export default ProductDetailImage;
