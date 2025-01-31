import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import ScrollToTop from "./hooks/useScrollToTop";
import { lazy, Suspense } from "react";
import Loader from "./ui/Loader";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import ShopList from "./ui/ShopList";
import Checkout from "./pages/Checkout";
import CheckoutItem from "./ui/CheckoutItem";
import OrderPlaced from "./ui/OrderPlaced";

const HomePage = lazy(() => import("./pages/HomePage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));

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
              <Route path="checkout" element={<Checkout />}>
                <Route index element={<CheckoutItem />} />
                <Route path="orderPlaced" element={<OrderPlaced />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
