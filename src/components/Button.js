import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 10px;
  ${props =>
    props.disabled
      ? css`
          background: "transparent";
          color: ${props.theme.contrast};
          border: solid 2px ${props.theme.contrast};
        `
      : css`
          background: ${props.theme.accent};
          color: ${props.theme.darkFont};
          border: solid 2px ${props.theme.accent};
        `}
  ${props =>
    props.big
      ? css`
          height: 50px;
          padding: 0;
          margin: 0;
          width: 235px;
          font-size: 24px;
        `
      : css`
          min-width: 100px;
          height: 35px;
          font-size: 20px;
          padding-left: 4%;
          padding-right: 4%;
        `}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AltButton = styled(Button)`
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFont};
  border: ${props => props.theme.contrast};
`;

function Button({ disabled, big, onClick, className, children }) {
  return (
    <StyledButton
      disabled={disabled}
      big={big}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
