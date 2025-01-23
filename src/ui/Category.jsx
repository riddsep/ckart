import styled from "styled-components";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import CategoryItem from "./CategoryItem";
import Button from "./Button";
import { categoryData } from "../constant/constant";

function Category() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Heading>
          <p>&mdash; Our Categories &mdash;</p>
          <h1>Our Products Collection</h1>
        </Heading>
        <CategoryList>
          {categoryData.map((category) => (
            <CategoryItem key={category.title} category={category} />
          ))}
        </CategoryList>
        <div>
          <Button $variant="primary" $size="lg">
            Explore Now
            <img src="icons/arrow-right.svg" alt="" />
          </Button>
        </div>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-primary-5);
  padding-block: 100px;
`;

const Heading = styled.div`
  margin-block-end: 50px;
  text-align: center;

  p {
    color: var(--clr-primary-100);
    font-weight: bold;
  }
  h1 {
    font-size: 48px;
  }
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-block-end: 30px;

  & + div {
    display: flex;
    justify-content: center;
  }
`;

export default Category;
