import React from "react";
import styled from "styled-components";
import Pointer from "../ressources/icons/Pointer";
import LogoStyled from "../ressources/icons/Logo";

const StyledHeader = styled.header`
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFont};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  height: 80px;
`;

const StyledH2 = styled.h2`
  color: ${props => props.theme.brightFont};
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export function TopPointer({ headline, rotate }) {
  return (
    <StyledHeader headline={headline}>
      <StyledH2>{headline}</StyledH2>
      <Pointer rotate={rotate}></Pointer>
    </StyledHeader>
  );
}

export function TopLogo({ headline }) {
  return (
    <StyledHeader headline={headline}>
      <StyledH2>{headline}</StyledH2>
      <LogoStyled></LogoStyled>
    </StyledHeader>
  );
}
