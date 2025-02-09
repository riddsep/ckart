import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import ScrollToTop from "./hooks/useScrollToTop";
import { lazy, Suspense } from "react";
import Loader from "./ui/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

// Lazy load komponen besar
const HomePage = lazy(() => import("./pages/HomePage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));
const ProductShop = lazy(() => import("./features/product/ProductShop"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderPlaced = lazy(() => import("./ui/OrderPlaced"));
const Order = lazy(() => import("./pages/Order"));
const OrderMain = lazy(() => import("./features/Order/OrderMain"));
const OrderDetail = lazy(() => import("./ui/OrderDetail"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <CartProvider>
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
                  <Route index element={<ProductShop />} />
                  <Route path=":id" element={<ProductDetail />} />
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
        </CartProvider>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--clr-white-100)",
            },
          }}
        />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
