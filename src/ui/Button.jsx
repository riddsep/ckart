import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) => {
    switch (props.$size) {
      case "sm":
        return css`
          padding: 6px 12px;
          font-size: 14px;
          font-weight: bold;
        `;
      case "lg":
        return css`
          padding: 10px 18px;
          font-size: 16px;
          font-weight: bold;
        `;
      case "xl":
        return css`
          padding: 12px 20px;
          font-size: 16px;
          font-weight: bold;
        `;
      default:
        return css`
          padding: 10px 16px;
          font-size: 14px;
          font-weight: bold;
        `;
    }
  }}
  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return css`
          background-color: var(--clr-primary-100);
          color: var(--clr-white-100);
          border: 1px solid var(--clr-primary-100);
        `;
      case "outline":
        return css`
          background-color: transparent;
          color: var(--clr-dark-100);
          border: 1px solid var(--clr-dark-100);
        `;
      default:
        return css``;
    }
  }};

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
`;
export default Button;
