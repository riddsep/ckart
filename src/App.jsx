import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Home from "./pages/Home";
import ScrollToTop from "./hooks/useScrollToTop";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
