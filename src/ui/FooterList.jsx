import styled from "styled-components";

function FooterList({ menu }) {
  return (
    <Wrapper>
      <Title>{menu.title}</Title>
      <Ul>
        {menu.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default FooterList;
