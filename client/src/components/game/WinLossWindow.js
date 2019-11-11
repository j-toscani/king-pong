import styled from "styled-components";
import React from "react";
import StyledWindow from "../StyledWindow";
import Button from "../Button";
import PropTypes from "prop-types";

const Headline = styled.h3`
  font-size: 20px;
  margin: 0;
`;

const StyledWindowSee = styled(StyledWindow)`
  opacity: 0.8;
  z-index: 30;
  left: 10px;
  top: 75px;
  position: absolute;
`;

function WinLossWindow({ handleClick, result }) {
  return (
    <StyledWindowSee>
      <Headline>{result ? "You Won" : "You Lost"}</Headline>
      {result ? (
        <p>Your opponent lost all lifes!</p>
      ) : (
        <p>Get into another game and improve!</p>
      )}
      <Button active onClick={handleClick}>
        Back to main screen
      </Button>
    </StyledWindowSee>
  );
}

export default WinLossWindow;

WinLossWindow.propTypes = {
  result: PropTypes.bool,
  handleClick: PropTypes.func
};
