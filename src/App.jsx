import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import ScrollToTop from "./hooks/useScrollToTop";
import { lazy, Suspense } from "react";
import Loader from "./ui/Loader";

// Lazy load komponen besar
const HomePage = lazy(() => import("./pages/HomePage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));
const ShopList = lazy(() => import("./ui/ShopList"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderPlaced = lazy(() => import("./ui/OrderPlaced"));
const Order = lazy(() => import("./pages/Order"));
const OrderMain = lazy(() => import("./features/Order/OrderMain"));
const OrderDetail = lazy(() => import("./ui/OrderDetail"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<About />} />
            <Route path="contactus" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />}>
              <Route index element={<ShopList />} />
              <Route path="1" element={<ProductDetail />} />
              <Route path="cart" element={<ShoppingCart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="orderPlaced" element={<OrderPlaced />} />
              <Route path="orders" element={<Order />}>
                <Route index element={<OrderMain />} />
                <Route path="1" element={<OrderDetail />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
