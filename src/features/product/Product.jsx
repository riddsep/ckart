import styled from "styled-components";
import StarRating from "../../ui/StarRating";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";
import { rupiah } from "../../hooks/useCurrency";
import { discountPrice } from "../../hooks/useDiscount";
import { getProductCategory } from "../../services/apiProducts";
import { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";

function Product({ product }) {
  const { id, name, price, discount, reviews, image, categoryId } = product;
  const [category, setCategory] = useState({});
  const { setActiveIndex } = useProduct();

  const handleClick = () => {
    setActiveIndex(0);
  };

  useEffect(() => {
    getProductCategory(categoryId).then((data) => setCategory(data));
  }, [categoryId]);

  return (
    <Wrapper>
      <img src={image?.[0]} alt={name} />
      <div>
        <Button
          $variant="primary"
          $size="sm"
          as={NavLink}
          to={`/shop/${id}`}
          onClick={handleClick}
        >
          <img src="/icons/shopping-cart-light.svg" alt="" />
        </Button>
        <Button $variant="primary" $size="sm">
          <img src="/icons/heart-light.svg" alt="" />
        </Button>
      </div>
      <Description>
        <Heading>
          <Category>{category?.name}</Category>
          <Title>{name}</Title>
        </Heading>
        <Reviews>
          <StarRating />
          <span>({reviews?.length} Reviews)</span>
        </Reviews>
        <Price>
          <div>
            <FixPrice>{rupiah(discountPrice(price, discount))}</FixPrice>
            {discount > 0 && <Discount>{rupiah(price)}</Discount>}
          </div>
          {discount > 0 && <DiscountRate>-{discount * 100}%</DiscountRate>}
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Reviews = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--clr-dark-100);
  margin-block-end: 10px;
`;

const Price = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-weight: bold;
`;
const FixPrice = styled.p`
  color: var(--clr-dark-100);
  font-size: 20px;
`;

const Discount = styled.p`
  color: var(--clr-dark-15);
  text-decoration: line-through;
  font-size: 18px;
`;

const DiscountRate = styled.p`
  color: var(--clr-primary-100);
`;
export default Product;
