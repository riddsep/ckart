import styled from "styled-components";
import products from "../constant/constant";
import Banner from "../ui/Banner";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import Product from "../ui/Product";
import Button from "../ui/Button";

function Shop() {
  return (
    <>
      <Banner src={"images/banner-1.png"} title={"Our Shop"} />
      <Wrapper>
        <SideBar>
          <CategoriesFilter>
            <h3>Categories</h3>
            <Form>
              <label>
                <input type="checkbox" />
                Furniture
              </label>
              <label>
                <input type="checkbox" />
                Decor
              </label>
              <label>
                <input type="checkbox" />
                Bedding & Textiles
              </label>
              <label>
                <input type="checkbox" />
                Kitchen & Dining
              </label>
              <label>
                <input type="checkbox" />
                Outdoor Decor
              </label>
            </Form>
          </CategoriesFilter>
          <StyleFilter>
            <h3>Style</h3>

            <Form>
              <label>
                <input type="checkbox" />
                Modern
              </label>
              <label>
                <input type="checkbox" />
                Rustic
              </label>
              <label>
                <input type="checkbox" />
                Minimal
              </label>
              <label>
                <input type="checkbox" />
                Industrial
              </label>
            </Form>
          </StyleFilter>
          <BrandFilter>
            <h3>Brand</h3>

            <Form>
              <label>
                <input type="checkbox" />
                Furniture
              </label>
              <label>
                <input type="checkbox" />
                Furai
              </label>
              <label>
                <input type="checkbox" />
                Home Brand
              </label>
            </Form>
          </BrandFilter>
        </SideBar>
        <Main>
          <Heading>
            <p>Showing 1 - 12 of 19 products</p>
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
          <ProductList>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductList>
          <Pagination>
            <p>Showing 1 - 12 of 19 products</p>
            <div>
              <Button $variant="outline" $size="sm">
                <img src="icons/arrow-left.svg" alt="" />
              </Button>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>...</span>
              <span>10</span>
              <Button $variant="outline" $size="sm">
                <img src="icons/chevron-right-dark.svg" alt="" />
              </Button>
            </div>
          </Pagination>
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-block-end: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    appearance: none; /* Menghapus checkbox default */
    width: 20px;
    height: 20px;
    border: 2px solid var(--clr-dark-15);
    border-radius: 4px; /* Buat kotak jadi rounded */
    outline: none;
    cursor: pointer;

    &:checked {
      background-color: transparent; /* Warna saat dicentang */
      border-color: var(--clr-primary-100);
      position: relative;
    }

    &:checked::after {
      content: url("icons/checked.svg"); /* Icon checklist */
      font-size: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%);
    }
  }
`;
const CategoriesFilter = styled.div``;
const StyleFilter = styled.div``;
const BrandFilter = styled.div``;

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
const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid var(--clr-dark-15);
`;
const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    span {
      cursor: pointer;
      border: 1px solid var(--clr-dark-15);
      padding: 10px 20px;
    }
  }
`;

export default Shop;
