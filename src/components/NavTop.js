import React from "react";
import styled from "styled-components";
import { StyledHeader } from "./Top";
import { AltButton } from "./Button";
import Cross from "../ressources/icons/Cross";
import Options from "../ressources/icons/Options";
import LogoStyled from "../ressources/icons/Logo";

const CheckSettings = styled(Options)`
  height: 35px;
  width: 35px;
  padding: 0;

  min-width: 0;
`;

const RoundButton = styled(AltButton)`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  fill: ${props => props.theme.brightFont};
`;

const StyledH2 = styled.h2`
  color: ${props => props.theme.brightFont};
  font-size: 20px;
  text-align: left;
  font-weight: 400;
  font-style: none;
`;

const LeaveSettings = styled(Cross)`
  height: 35px;
  width: 35px;
  padding: 0;
  min-width: 0;
`;

function NavTop({ state, round, onClick }) {
  if (state === "before") {
    return (
      <StyledHeader>
        <RoundButton onClick={onClick} round={round}>
          <CheckSettings></CheckSettings>
        </RoundButton>
        <StyledH2>Play!</StyledH2>
        <LogoStyled></LogoStyled>
      </StyledHeader>
    );
  } else if (state === "after") {
    return (
      <StyledHeader>
        <RoundButton onClick={onClick} round={round}>
          <LeaveSettings></LeaveSettings>
        </RoundButton>
        <StyledH2>Settings</StyledH2>
        <LogoStyled></LogoStyled>
      </StyledHeader>
    );
  }
}

export default NavTop;
