import styled from "styled-components";
import Product from "./Product";
import { products } from "../constant/constant";

function RelatedProductList() {
  return (
    <Wrapper>
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;
export default RelatedProductList;
