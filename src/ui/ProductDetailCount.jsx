import styled from "styled-components";
import { useCart } from "../context/CartContext";

function ProductDetailCount({ product }) {
  const { increaseQuantity, decreaseQuantity, cartItems } = useCart();

  const itemExist = cartItems.find((item) => item.id === product?.id);

  return (
    <Wrapper>
      <Decrease onClick={() => decreaseQuantity(product)}>-</Decrease>
      <span>{itemExist?.quantity || 1}</span>
      <Increase onClick={() => increaseQuantity(product)}>+</Increase>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  span {
    padding: 8px 18px;
    border: 1px solid var(--clr-dark-15);
  }
`;

const Decrease = styled.span`
  cursor: pointer;
  user-select: none;
`;

const Increase = styled.span`
  cursor: pointer;
  user-select: none;
`;

export default ProductDetailCount;
