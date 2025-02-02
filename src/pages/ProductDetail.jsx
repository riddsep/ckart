import styled from "styled-components";

import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import { useState } from "react";
import ProductDetailImage from "../ui/ProductDetailImage";
import ProductDetailHeader from "../ui/ProductDetailHeader";
import ProductDetailParagraph from "../ui/ProductDetailParagraph";
import ProductDetailCTA from "../ui/ProductDetailCTA";
import ProductDetailTab from "../ui/ProductDetailTab";
import ProductDetailMainDesc from "../ui/ProductDetailMainDesc";
import ProductDetailFeature from "../ui/ProductDetailFeature";
import ProductDetailShipping from "../ui/ProductDetailShipping";
import ProductDetailInfo from "../ui/ProductDetailInfo";
import ProductDetailReviewList from "../ui/ProductDetailReviewList";
import ProductDetailAddReviews from "../ui/ProductDetailAddReviews";
import RelatedProductList from "../ui/RelatedProductList";
import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../services/apiProducts";
import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";

function ProductDetail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();
  console.log(id);

  const {
    data: product,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsById(id),
    enabled: !!id,
  });

  if (error) console.log(error);
  if (isPending) return <Loader />;

  return (
    <MaxWidthWrapper>
      <DetailWrapper>
        <ProductDetailImage images={product.image} />
        <DescriptionDetail>
          <ProductDetailHeader product={product} />
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
              <ProductDetailReviewList />
              <ProductDetailAddReviews />
            </Reviews>
          )}
        </TabContent>
      </div>

      <RelatedProduct>
        <p>&mdash; Product &mdash;</p>
        <h1>Related Product</h1>
        <RelatedProductList />
      </RelatedProduct>
    </MaxWidthWrapper>
  );
}

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

const RelatedProduct = styled.div`
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

export default ProductDetail;
