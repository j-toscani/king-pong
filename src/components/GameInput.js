import React from "react";
import styled from "styled-components";
import Pointer from "../ressources/icons/Pointer";
import Button from "../components/Button";

const StyledConcede = styled(Button)`
  box-shadow: 0px 3px 6px;
  position: absolute;
`;

const StyledInputButton = styled.button`
  box-shadow: 0px 3px 6px;
  background: ${props => props.theme.contrast};
  border: ${props => props.theme.contrast};
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${props => props.theme.brightFont};
  height: 80px;
  width: 140px;
`;

function GameButton({ onClick, direction }) {
  if (direction === "right") {
    return (
      <StyledInputButton onClick={onClick}>
        <Pointer white />
      </StyledInputButton>
    );
  } else if (direction === "left") {
    return (
      <StyledInputButton onClick={onClick}>
        <Pointer rotate white />
      </StyledInputButton>
    );
  }
}

export function ConcedeButton({ onClick }) {
  return (
    <StyledConcede active onClick={onClick}>
      Concede
    </StyledConcede>
  );
}

export default GameButton;
