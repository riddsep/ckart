import styled from "styled-components";
import Chip from "./Chip";

function BlogItem({ blog }) {
  return (
    <Wrapper>
      <Banner>
        <Img src={blog.src} alt="a decoration of bathrooms" />
        <ChipWrapper>
          <Chip state={"filled"}>{blog.category}</Chip>
        </ChipWrapper>
      </Banner>
      <Details>
        <Time>{blog.date}</Time>
        <Title>{blog.title}</Title>
        <Description>{blog.description}</Description>
        <DetailButton>
          Read More
          <img src="/icons/arrow-right.svg" alt="arrow right" />
        </DetailButton>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 407px;
  border: 2px solid var(--clr-dark-15);
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 300px;
`;
const Details = styled.div`
  padding: 20px;
`;
const Time = styled.time`
  font-size: 14px;
  font-weight: bold;
  color: var(--clr-primary-100);
  margin-bottom: 10px;
`;
const Title = styled.h1`
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-weight: 400;
  margin-bottom: 20px;
`;
const DetailButton = styled.button`
  padding: 8px 14px;
  color: var(--clr-primary-100);
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: var(--clr-primary-100);
  border: 0;
  color: var(--clr-white-100);
`;

const ChipWrapper = styled.div`
  width: fit-content;
  position: absolute;
  top: 30px;
  left: 30px;
`;

const Banner = styled.div`
  position: relative;
  height: 300px;
`;

export default BlogItem;
