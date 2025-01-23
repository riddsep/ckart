import styled from "styled-components";
import Category from "../ui/Category";
import AboutUs from "../ui/AboutUs";
import Hero from "../ui/Hero";
import Header from "../ui/Header";
import Selling from "../ui/Selling";

function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <AboutUs />
      <Category />
      <Selling />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

export default HomePage;
