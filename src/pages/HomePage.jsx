import styled from "styled-components";
import Category from "../ui/Category";
import AboutUs from "../ui/AboutUs";
import Hero from "../ui/Hero";
import Header from "../ui/Header";
import Selling from "../ui/Selling";
import Testimonial from "../ui/Testimonial";
import Blog from "../ui/Blog";
import Footer from "../ui/Footer";

function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <AboutUs />
      <Category />
      <Selling />
      <Testimonial />
      <Blog />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

export default HomePage;
