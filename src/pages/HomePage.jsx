import styled from "styled-components";

import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

export default HomePage;
