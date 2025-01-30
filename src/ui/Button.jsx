import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

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

          &:hover {
            background-color: var(--clr-primary-75);
          }
        `;
      case "outline":
        return css`
          background-color: transparent;
          color: var(--clr-dark-100);
          border: 1px solid var(--clr-dark-100);

          &:hover {
            background-color: var(--clr-primary-5);
          }
        `;
      default:
        return css``;
    }
  }};

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
      justify-content: center;
    `}
`;
export default Button;
