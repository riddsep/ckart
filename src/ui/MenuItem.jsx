import styled from "styled-components";

function MenuItem({ title, menuList }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <MenuList>
        {menuList.map((menuItem) => (
          <li key={menuItem}>{menuItem}</li>
        ))}
      </MenuList>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  border-bottom: 2px solid var(--clr-dark-15);
  padding-block-end: 20px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default MenuItem;
