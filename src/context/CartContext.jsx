/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../services/apiProducts";
import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";

const CartContext = createContext();

function CartProvider({ children }) {
  const [count, setCount] = useState(1);

  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();

  const {
    data: product,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductsById(id),
    enabled: !!id,
    gcTime: 1000 * 30,
  });

  const handleClickDecrease = () => {
    if (count - 1 === 0) return;
    setCount((prev) => prev - 1);
  };
  const handleClickIncrease = () => {
    if (count + 1 > product.stock) return;
    setCount((prev) => prev + 1);
  };

  if (isPending) return <Loader />;
  if (error) console.error(error);
  return (
    <CartContext.Provider
      value={{
        product,
        count,
        setCount,
        handleClickDecrease,
        handleClickIncrease,
        activeIndex,
        setActiveIndex,
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
