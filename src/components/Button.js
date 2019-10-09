import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: solid 2px
    ${props => (props.active ? props.theme.accent : props.theme.contrast)};
  border-radius: 10px;
  background: ${props => (props.active ? props.theme.accent : "transparent")};
  color: ${props =>
    props.active ? props.theme.darkFont : props.theme.contrast};
  text-align: center;
`;

function Button({ active, className, onClick, children }) {
  return (
    <StyledButton className={className} onClick={onClick} active={active}>
      {children}
    </StyledButton>
  );
}

export default Button;
