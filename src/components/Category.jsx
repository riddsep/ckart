import styled from "styled-components";

function Category() {
  return (
    <Wrapper>
      <img src="images/image-12.png" alt="" />
      <Description>
        <Title>Bathroom</Title>
        <div>
          <span>View Details</span>
          <img src="icons/arrow-right.svg" alt="" />
        </div>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 407px;
`;

const Description = styled.div`
  border: 2px solid var(--clr-dark-15);
  padding: 0 30px 30px 30px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: var(--clr-white-100);
  background-color: var(--clr-primary-100);
  padding: 15px 20px;
`;
export default Category;
