import React from "react";
import styled from "styled-components";
import StyledHeader from "./StyledHeader";
import StyledH2 from "./StyledH2";
import LogoStyled from "../../ressources/icons/Logo";
import Cross from "../../ressources/icons/Cross";
import Options from "../../ressources/icons/Options";

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

function HeaderNav({ open, toggleOpen, headline }) {
  return (
    <StyledHeader>
      <ToggleSettings onClick={toggleOpen}>
        {open ? <Cross></Cross> : <Options></Options>}
      </ToggleSettings>
      <StyledH2>{headline}</StyledH2>
      <LogoStyled></LogoStyled>
    </StyledHeader>
  );
}

export default HeaderNav;
