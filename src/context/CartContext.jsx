/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { discountPrice } from "../hooks/useDiscount";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setDiscount(0);
  }, [cartItems]);

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

  const subTotal = () => {
    return cartItems.length > 0
      ? cartItems.reduce(
          (a, b) => a + discountPrice(b.price, b.discount) * b.quantity,
          0
        )
      : 0;
  };

  const applyCode = (code) => {
    const discountValue =
      cartItems.length > 0 && code && code === "TDR3000" ? 0.1 : 0;
    setDiscount(discountValue);
  };

  const shippingRate = subTotal() >= 3000000 ? 0 : 0.05;

  const total = () => {
    const subtotalValue = subTotal();
    const discountValue = subtotalValue * discount;
    const shippingCost = subtotalValue * shippingRate;

    return subtotalValue - discountValue + shippingCost;
  };

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
        applyCode,
        discount,
        total,
        shippingRate,
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
