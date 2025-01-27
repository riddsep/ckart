import styled from "styled-components";
import StarRating from "./StarRating";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Product({ product }) {
  return (
    <Wrapper>
      <img src={product.image} alt={product.title} />
      <div>
        <Button $variant="primary" $size="sm" as={NavLink} to={`/shop/1`}>
          <img src="icons/shopping-cart-light.svg" alt="" />
        </Button>
        <Button $variant="primary" $size="sm">
          <img src="icons/heart-light.svg" alt="" />
        </Button>
      </div>
      <Description>
        <Heading>
          <Category>{product.category}</Category>
          <Title>{product.title}</Title>
        </Heading>
        <Reviews>
          <StarRating />
          <span>({product.reviews.total} Reviews)</span>
        </Reviews>
        <Price>
          <FixPrice>$ {product.price.fixed}</FixPrice>
          <Discount>$ {product.price.discount}</Discount>
        </Price>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 298px;
  padding: 10px;
  border: 2px solid var(--clr-dark-15);
  position: relative;
  text-decoration: none;

  img {
    height: 100%;
    max-height: 250px;

    & + div {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: fit-content;
      gap: 10px;
      right: 30px;
      top: 30px;
    }
  }
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
  color: var(--clr-dark-100);
`;
const Reviews = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--clr-dark-100);
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
