import styled from "styled-components";

function Blog() {
  return (
    <Wrapper>
      <Img src="/images/image-1.png" alt="a decoration of bathrooms" />
      <Details>
        <Time>August 30, 2023</Time>
        <Title>Top 5 Home Decor Trends for 2024</Title>
        <Description>
          Explore the latest trends in home decor, from sustainable materials to
          bold color palettes...
        </Description>
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

export default Blog;
