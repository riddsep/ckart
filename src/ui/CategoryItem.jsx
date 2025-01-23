import styled from "styled-components";

function CategoryItem({ category }) {
  return (
    <Wrapper>
      <Img src={category.src} alt={category.title} />
      <Description>
        <Title>{category.title}</Title>
        <Details>
          <span>View Details</span>
          <img src="icons/chevron-right.svg" alt="" />
        </Details>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 407px;
  border: 2px solid var(--clr-dark-15);
`;

const Img = styled.img`
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
`;

const Description = styled.div`
  padding: 0 30px 30px 30px;
  margin-top: -20px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 20px;
  color: var(--clr-white-100);
  background-color: var(--clr-primary-100);
  padding: 15px 20px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  color: var(--clr-primary-100);
  cursor: pointer;
`;
export default CategoryItem;
