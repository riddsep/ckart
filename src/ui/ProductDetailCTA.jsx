import styled from "styled-components";
import Button from "./Button";
import ProductDetailCount from "./ProductDetailCount";
import { NavLink } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import toast from "react-hot-toast";

function ProductDetailCTA() {
  const { product } = useProduct();
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => {
      return prev + 1 > product.stock ? prev : prev + 1;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      return prev - 1 < 1 ? prev : prev - 1;
    });
  };

  const handleAddToCart = () => {
    const itemExist = cartItems.find((item) => item.id === product.id);

    if (itemExist && itemExist.quantity + quantity > itemExist.stock) {
      return toast.error(`Product is out of stock`);
    } else {
      addToCart(product, quantity);
      toast.success("Product added to cart");
      setQuantity(1);
    }
  };

  return (
    <Wrapper>
      <div>
        <ProductDetailCount
          quantity={quantity}
          onDecreaseQuantity={decreaseQuantity}
          onIncreaseQuantity={increaseQuantity}
        />
        <div>
          <Button $variant="primary" onClick={handleAddToCart}>
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
