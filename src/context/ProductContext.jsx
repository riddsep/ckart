/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [product, setProduct] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
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
