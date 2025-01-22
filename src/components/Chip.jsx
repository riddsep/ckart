import styled, { css } from "styled-components";

function Chip({ children, color }) {
  return <Wrapper color={color}>{children}</Wrapper>;
}

const Wrapper = styled.p`
  padding: 8px 14px;
  ${(props) =>
    props.color &&
    css`
      border: 2px solid var(--clr-primary-100);
      background-color: var(--clr-primary-5);
      color: var(--clr-primary-100);
    `}
`;

export default Chip;
