import styled from "styled-components";
import StarRating from "./StarRating";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Product({ product }) {
  console.log(product);
  const discount = product.price * product.discount;
  return (
    <Wrapper>
      <img
        src={
          "https://mobkdagroxcwmolsyqaj.supabase.co/storage/v1/object/public/products/1/product-1.jpg"
        }
        alt={product.name}
      />
      <div>
        <Button $variant="primary" $size="sm" as={NavLink} to={`1`}>
          <img src="/icons/shopping-cart-light.svg" alt="" />
        </Button>
        <Button $variant="primary" $size="sm">
          <img src="/icons/heart-light.svg" alt="" />
        </Button>
      </div>
      <Description>
        <Heading>
          <Category>{product.category}</Category>
          <Title>{product.name}</Title>
        </Heading>
        <Reviews>
          <StarRating />
          <span>({product.reviews.length} Reviews)</span>
        </Reviews>
        <Price>
          <div>
            <FixPrice>Rp. {product.price - discount}</FixPrice>
            <DiscountRate>-{product.discount * 100}%</DiscountRate>
          </div>
          <Discount>Rp. {discount}</Discount>
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
  align-items: flex-start;
  gap: 10px;
  font-size: 19px;
  font-weight: bold;
`;
const FixPrice = styled.p`
  color: var(--clr-dark-100);
`;

const Discount = styled.p`
  color: var(--clr-dark-15);
  text-decoration: line-through;
`;

const DiscountRate = styled.p`
  color: var(--clr-primary-100);
  font-size: 16px;
`;
export default Product;
