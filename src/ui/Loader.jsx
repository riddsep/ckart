import styled from "styled-components";

function Loader() {
  return (
    <Wrapper>
      <Load />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Load = styled.div`
  /* HTML: <div class="loader"></div> */

  width: 48px;
  height: 48px;
  border: 5px solid var(--clr-primary-100);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
