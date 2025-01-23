import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;

  ${(props) => {
    switch (props.$size) {
      case "small":
        return css`
          padding: 8px 14px;
          font-size: 18px;
        `;
      case "large":
        return css`
          padding: 16px 28px;
          font-size: 18px;
        `;
    }
  }}

  ${(props) => {
    switch (props.$varint) {
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
    }
  }}
`;
export default Button;
