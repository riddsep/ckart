import { Fragment } from "react";
import styled from "styled-components";

function ProductDetailMainDesc({ longDescription }) {
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
