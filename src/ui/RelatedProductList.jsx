import styled from "styled-components";
import Product from "../features/product/Product";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/apiProducts";
import { useCart } from "../context/CartContext";

function RelatedProductList() {
  const {
    product: { id: productId, categoryId },
  } = useCart();

  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (!categoryId) return null;

    getProductsByCategory(categoryId).then((data) => setRelatedProduct(data));
  }, [categoryId]);

  const filteredProduct = relatedProduct.filter(
    (product) => product.id !== productId
  );

  return (
    <Wrapper $isEmpty={filteredProduct.length === 0}>
      {filteredProduct.length > 0 ? (
        filteredProduct.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <NoRelated>Oops! No related products at the moment.</NoRelated>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isEmpty ? "1fr" : "repeat(4, 1fr)"};
  gap: 30px;
`;

const NoRelated = styled.div`
  text-align: center;
  width: 100%;
  font-size: 20px;
`;
export default RelatedProductList;
