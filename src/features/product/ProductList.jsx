import styled from "styled-components";
import Product from "./Product";

function ProductList({ products = [] }) {
  if (products.length === 0) return null;
  return (
    <Wrapper>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export default ProductList;
