import React from "react";
import StyledHeader from "./StyledHeader";
import StyledH2 from "./StyledH2";
import LogoStyled from "../../ressources/icons/Logo";
import PropTypes from "prop-types";

export default function HeaderLogo({ headline }) {
  return (
    <StyledHeader>
      <StyledH2>{headline}</StyledH2>
      <LogoStyled></LogoStyled>
    </StyledHeader>
  );
}

HeaderLogo.propTypes = {
  headline: PropTypes.string
};
