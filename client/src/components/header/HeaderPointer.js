import React from "./node_modules/react";
import Pointer from "../../ressources/icons/Pointer";
import StyledHeader from "./StyledHeader";
import StyledH2 from "./StyledH2";
import InputFieldStyled from "./InputFieldStyled";
import { useHistory } from "./node_modules/react-router-dom";
import PropTypes from "./node_modules/prop-types";

export default function HeaderPointer({ headline, rotate }) {
  let history = useHistory();

  function routeTo(destination) {
    history.push(`/${destination}`);
  }

  return (
    <StyledHeader>
      <StyledH2>{headline}</StyledH2>
      <InputFieldStyled onClick={() => routeTo("main")}>
        <Pointer rotate={rotate}></Pointer>
      </InputFieldStyled>
    </StyledHeader>
  );
}

HeaderPointer.propTypes = {
  headline: PropTypes.string,
  rotate: PropTypes.string
};
