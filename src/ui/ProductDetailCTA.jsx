import styled from "styled-components";
import Button from "./Button";
import ProductDetailCount from "./ProductDetailCount";
import { NavLink, useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

function ProductDetailCTA() {
  const { product } = useProduct();
  const { count, setCount, handleAddToCart } = useCart();

  const navigate = useNavigate();

  const handleClick = () => {
    handleAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      image: product.image,
      quantity: count,
      stock: product.stock,
    });
    setCount(1);
    navigate("/shop/cart");
  };

  return (
    <Wrapper>
      <div>
        <ProductDetailCount
          setCount={setCount}
          count={count}
          product={product}
        />
        <div>
          <Button $variant="primary" onClick={handleClick}>
            Add to Cart <img src="/icons/shopping-cart-light.svg" alt="" />
          </Button>
          <Button $variant="outline" as={NavLink} to={"/shop/checkout"}>
            Buy Now <img src="/icons/arrow-right-dark.svg" alt="" />
          </Button>
        </div>
      </div>
      <p>
        Estimate delivery time: <span>12-26 days</span>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    padding-block-end: 30px;
    margin-block-end: 30px;
    border-bottom: 1px solid var(--clr-dark-15);

    & > div {
      display: flex;
      align-items: center;
    }

    & > div:last-of-type {
      display: flex;
      gap: 10px;
    }
  }

  & > :last-child span {
    font-weight: bold;
  }
`;

export default ProductDetailCTA;
