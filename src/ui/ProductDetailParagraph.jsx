import styled from "styled-components";

function ProductDetailParagraph() {
  return (
    <Wrapper>
      <span>
        Explore our vast selection at ‘The Creative Store’- your one-stop
        destination for all construction and building needs. From the
        foundational bricks to the final touches of lighting, discover quality
        and variety like never before.
      </span>
      <span>
        Explore our vast selection at ‘The Creative Store’- your one-stop
        destination for all construction and building needs. From the
        foundational bricks to the final touches of lighting, discover quality
        and variety like never before.
      </span>
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
