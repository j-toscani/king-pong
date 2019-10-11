import React from "react";
import styled from "styled-components";
import Pointer from "../ressources/icons/Pointer";
import LogoStyled from "../ressources/icons/Logo";

export const StyledHeader = styled.header`
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFont};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 30px;
  width: 100%;
  height: 80px;
`;

const StyledH2 = styled.h2`
  color: ${props => props.theme.brightFont};
  margin: 0;
  padding-right: 10;
  font-size: 20px;
`;

const InputFieldStyled = styled.button`
  padding: 0;
  margin: 0;
  text-align: right;
  background: ${props => props.theme.contrast};
  border: none;
`;

export function TopPointer({ headline, rotate, onClick }) {
  return (
    <StyledHeader headline={headline}>
      <StyledH2>{headline}</StyledH2>
      <InputFieldStyled onClick={onClick}>
        <Pointer rotate={rotate}></Pointer>
      </InputFieldStyled>
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
