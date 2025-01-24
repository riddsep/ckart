import styled from "styled-components";

function Avatar() {
  return (
    <Wrapper>
      <img src="images/avatar-1.png" alt="" />
      <div>
        <h1>Kaitlyn Grieve</h1>
        <p>Co-Founder</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  div h1 {
    font-size: 20px;
  }
`;
export default Avatar;
