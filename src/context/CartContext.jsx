/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { discountPrice } from "../hooks/useDiscount";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const itemExist = prev.some((item) => item.id === product.id);

      if (itemExist)
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      else return [...prev, { ...product, quantity: quantity }];
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity + 1 <= item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subTotal = () =>
    cartItems.reduce(
      (a, b) => a + discountPrice(b.price, b.discount) * b.quantity,
      0
    );
  console.log(cartItems);

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        addToCart,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeCartItem,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of the CartProvider");

  return context;
}

export { CartProvider, useCart };
