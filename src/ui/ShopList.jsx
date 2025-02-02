import Banner from "../ui/Banner";
import styled from "styled-components";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import CategoriesFilter from "./CategoriesFilter";
import StyleFilter from "./StyleFilter";
import BrandFilter from "./BrandFilter";
import ShowingProducts from "./ShowingProducts";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../services/apiProducts";

function ShopList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Banner src={"/images/banner-1.png"} title={"Our Shop"} />
      <Wrapper>
        <SideBar>
          <CategoriesFilter />
          <StyleFilter />
          <BrandFilter />
        </SideBar>
        <Main>
          <Heading>
            <ShowingProducts />
            <div>
              <p>Sort By</p>
              <Select>
                <option value="default">Default</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </Select>
            </div>
          </Heading>
          <ProductList products={products} />
          <Pagination />
        </Main>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  padding-block: 100px;
`;
const SideBar = styled.div`
  width: 100%;
  max-width: 300px;
  margin-right: 30px;

  h3 {
    font-weight: bold;
    font-size: 18px;
    padding-block-end: 10px;
    margin-block-end: 10px;
    border-bottom: 2px solid var(--clr-dark-15);
  }
`;

const Main = styled.div`
  flex: 1;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid var(--clr-dark-15);
`;

export default ShopList;
