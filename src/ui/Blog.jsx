import styled from "styled-components";

import BlogItem from "./BlogItem";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { BlogData } from "../constant/constant";

function Blog() {
  return (
    <Wrapper>
      <Heading>
        <p>&mdash; Discover The Blog &mdash;</p>
        <h1>Our Latest News</h1>
      </Heading>
      <BlogList>
        {BlogData.map((blog) => (
          <BlogItem key={blog.title} blog={blog} />
        ))}
      </BlogList>
    </Wrapper>
  );
}
const Wrapper = styled(MaxWidthWrapper)`
  padding-block: 120px;
`;
const Heading = styled.div`
  text-align: center;
  margin-bottom: 70px;

  p {
    font-weight: 600;
    color: var(--clr-primary-100);
  }
  h1 {
    font-size: 48px;
  }
`;
const BlogList = styled.div`
  display: flex;
  gap: 30px;
`;

export default Blog;
