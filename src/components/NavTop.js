import React from "react";
import styled from "styled-components";
import { StyledHeader } from "./Top";
import Cross from "../ressources/icons/Cross";
import Options from "../ressources/icons/Options";
import LogoStyled from "../ressources/icons/Logo";

const StyledH2 = styled.h2`
  color: ${props => props.theme.brightFont};
  font-size: 24px;
  text-align: left;
  font-weight: 400;
  font-style: none;
`;

const ToggleSettings = styled.button`
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFont};
  fill: ${props => props.theme.brightFont};
  border: ${props => props.theme.contrast};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  margin: 0;
  padding: 0;
`;

function NavTop({ state, handleToggleMode }) {
  if (state === "open") {
    return (
      <StyledHeader>
        <ToggleSettings onClick={() => handleToggleMode("open")}>
          <Cross></Cross>
        </ToggleSettings>
        <StyledH2>Settings</StyledH2>
        <LogoStyled></LogoStyled>
      </StyledHeader>
    );
  } else if (state === "closed") {
    return (
      <StyledHeader>
        <ToggleSettings onClick={() => handleToggleMode("open")}>
          <Options></Options>
        </ToggleSettings>
        <StyledH2>Play!</StyledH2>
        <LogoStyled></LogoStyled>
      </StyledHeader>
    );
  }
}

export default NavTop;
