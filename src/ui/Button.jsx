import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) => {
    switch (props.$size) {
      case "small":
        return css`
          padding: 8px 14px;
          font-size: 16px;
        `;
      case "large":
        return css`
          padding: 8px 24px;
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
  }};
`;
export default Button;
