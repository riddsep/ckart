import styled from "styled-components";
import StarRating from "./StarRating";

function Product() {
  return (
    <Wrapper>
      <img src="images/image-2.jpg" alt="" />
      <Description>
        <Heading>
          <Category>furniture</Category>
          <Title>Pilke Wooden Storage</Title>
        </Heading>
        <Reviews>
          <StarRating />
          <span>(145 Reviews)</span>
        </Reviews>
        <Price>
          <FixPrice>$ 245.52</FixPrice>
          <Discount>$ 22.52</Discount>
        </Price>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 298px;
  padding: 10px;
  border: 2px solid var(--clr-dark-15);
`;
const Description = styled.div`
  padding: 20px 10px;
`;
const Heading = styled.div`
  margin-block-end: 10px;
`;
const Category = styled.p`
  text-transform: uppercase;
  margin-block-end: 10px;
  font-size: 12px;
  color: var(--clr-primary-100);
`;
const Title = styled.p`
  font-weight: bold;
`;
const Reviews = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
`;
const FixPrice = styled.p`
  color: var(--clr-dark-100);
`;

const Discount = styled.p`
  color: var(--clr-dark-15);
  text-decoration: line-through;
`;
export default Product;
