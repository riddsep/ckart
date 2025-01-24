import styled, { css } from "styled-components";

function Chip({ children, state }) {
  return <Wrapper $state={state}>{children}</Wrapper>;
}

const Wrapper = styled.p`
  padding: 8px 14px;
  ${(props) => {
    switch (props.$state) {
      case "completed":
        return css`
          background-color: var(--clr-success-15);
          color: var(--clr-success-100);
          border: 1px solid var(--clr-success-100);
        `;
      case "pending":
        return css`
          background-color: var(--clr-warning-15);
          color: var(--clr-warning-100);
          border: 1px solid var(--clr-warning-100);
        `;
      case "canceled":
        return css`
          background-color: var(--clr-error-15);
          color: var(--clr-error-100);
          border: 1px solid var(--clr-error-100);
        `;
      case "filled":
        return css`
          background-color: var(--clr-primary-100);
          color: var(--clr-white-100);
          border: 1px solid var(--clr-primary-100);
        `;
      default:
        return css`
          background-color: var(--clr-primary-15);
          color: var(--clr-primary-100);
          border: 1px solid var(--clr-primary-100);
        `;
    }
  }}
`;

export default Chip;
