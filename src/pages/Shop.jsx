import { Outlet } from "react-router-dom";
import { ProductProvider } from "../context/ProductContext";

function Shop() {
  return (
    <ProductProvider>
      <Outlet />
    </ProductProvider>
  );
}

export default Shop;
