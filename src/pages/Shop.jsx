import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

function Shop() {
  return (
    <>
      <CartProvider>
        <Outlet />
      </CartProvider>
    </>
  );
}

export default Shop;
