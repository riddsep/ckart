/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickDecrease = () => {
    if (count - 1 === 0) return;
    setCount((prev) => prev - 1);
  };
  const handleClickIncrease = () => {
    if (count + 1 > product.stock) return;
    setCount((prev) => prev + 1);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        count,
        setCount,
        handleClickDecrease,
        handleClickIncrease,
        activeIndex,
        setActiveIndex,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);

  if (context === undefined)
    throw new Error("ProductContext was used outside of the ProductProvider");
  return context;
}

export { ProductProvider, useProduct };
