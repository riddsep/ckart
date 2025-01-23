import AboutUs from "../ui/AboutUs";
import Hero from "../ui/Hero";
import Header from "../ui/Header";
import styled from "styled-components";

function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <AboutUs />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

export default HomePage;
