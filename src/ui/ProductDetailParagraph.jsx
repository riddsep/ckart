import styled from "styled-components";
import { useCart } from "../context/CartContext";

function ProductDetailParagraph() {
  const {
    product: { shortDescription },
  } = useCart();

  const paragraphs = shortDescription.split("/n");

  return (
    <Wrapper>
      {paragraphs.map((paragraph, index) => (
        <span key={index}>{paragraph}</span>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--clr-dark-15);
`;

export default ProductDetailParagraph;
