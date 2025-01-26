import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import ScrollToTop from "./hooks/useScrollToTop";
import { lazy, Suspense } from "react";
import Loader from "./ui/Loader";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
