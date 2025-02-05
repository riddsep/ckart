import { Fragment } from "react";
import styled from "styled-components";
import { useProduct } from "../context/ProductContext";

function ProductDetailMainDesc() {
  const {
    product: { longDescription },
  } = useProduct();

  if (!longDescription) return null;

  const { intro, features } = longDescription[0];

  return (
    <Wrapper>
      <p>{intro}</p>
      {features?.map((feat, i) => (
        <Fragment key={feat.title}>
          <h3>
            {i + 1}. {feat.title}
          </h3>
          <p>{feat.content}</p>
        </Fragment>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export default ProductDetailMainDesc;
