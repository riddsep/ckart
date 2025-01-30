import styled from "styled-components";

import Banner from "../ui/Banner";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import Chip from "../ui/Chip";
import Button from "../ui/Button";
import BlogItem from "../ui/BlogItem";
import { BlogData } from "../constant/constant";

function Blog() {
  return (
    <>
      <Banner src={"/images/banner-3.jpg"} title={"Latest News"} />
      <MaxWidthWrapper>
        <BlogBig>
          <ImgBanner>
            <Img src="images/blog-3.jpg" alt="" />
            <ChipWrapper>
              <Chip state="filled">Home Decor</Chip>
            </ChipWrapper>
          </ImgBanner>
          <BigCaption>
            <p>August 30, 2023</p>
            <h1>Safe, Reliable & Empress Moving Solutions!</h1>
            <p>
              Explore our vast selection at ‘The Creative Store’- your one-stop
              destination for all construction and building needs. From the
              foundational bricks to the final touches of lighting, discover
              quality and variety like never before.
            </p>
            <Button $variant="primary">
              Read More <img src="icons/arrow-right.svg" alt="" />
            </Button>
          </BigCaption>
        </BlogBig>
        <BlogSmall>
          {BlogData.map((blog) => (
            <BlogItem key={blog.title} blog={blog} />
          ))}
          {BlogData.map((blog) => (
            <BlogItem key={blog.title} blog={blog} />
          ))}
        </BlogSmall>
      </MaxWidthWrapper>
    </>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 470px;
  object-fit: cover;
`;
const ChipWrapper = styled.div`
  width: fit-content;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ImgBanner = styled.div`
  position: relative;
`;
const BlogBig = styled.div`
  display: flex;
  gap: 40px;
  margin-block-start: 120px;
  margin-block-end: 100px;

  & > div {
    flex: 1;
  }
`;

const BigCaption = styled.div`
  padding-block: 45px;

  & > p:first-child {
    font-weight: 600;
    margin-block-end: 10px;
    color: var(--clr-primary-100);
  }

  & > h1 {
    font-size: 48px;
    line-height: 1.2;
    margin-block-end: 20px;
  }

  & > p:nth-of-type(2) {
    padding-block-end: 30px;
    margin-block-end: 30px;
    border-bottom: 1px solid var(--clr-dark-15);
  }
`;
const BlogSmall = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-block-end: 120px;
`;
export default Blog;
