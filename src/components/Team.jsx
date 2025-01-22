import styled from "styled-components";

function Team() {
  return (
    <Wrapper>
      <Img src="images/team-1.jpg" alt="" />
      <Name>Adrina Stone</Name>
      <Role>CEO</Role>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 407px;
  border: 2px solid var(--clr-dark-15);
  text-align: center;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 500px;
`;

const Name = styled.h1`
  font-size: 24px;
  padding-block-start: 20px;
`;

const Role = styled.small`
  display: block;
  color: var(--clr-primary-100);
  font-weight: 600;
  font-size: 16px;
`;

export default Team;
