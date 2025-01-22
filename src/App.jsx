import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Tab from "./components/Tab";
import Team from "./components/Team";
import Order from "./features/Order/Order";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Footer />
      <Team />
      <Product />
      <Tab />
      <Order />
    </>
  );
}

export default App;
