import React from "react";
import Pointer from "../../ressources/icons/Pointer";
import StyledHeader from "./StyledHeader";
import StyledH2 from "./StyledH2";
import InputFieldStyled from "./InputFieldStyled";
import { useHistory } from "react-router-dom";

export default function HeaderPointer({ headline, rotate }) {
  let history = useHistory();

  function handleClick(destination) {
    history.push(`/${destination}`);
  }

  return (
    <StyledHeader>
      <StyledH2>{headline}</StyledH2>
      <InputFieldStyled onClick={() => handleClick("select")}>
        <Pointer rotate={rotate}></Pointer>
      </InputFieldStyled>
    </StyledHeader>
  );
}
