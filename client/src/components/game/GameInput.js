import React from "react";
import styled from "styled-components";
import Pointer from "../../ressources/icons/Pointer";
import useWindowDimensions from "../../gameData/getWindowDimensions";
import PropTypes from "prop-types";

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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

function isMobile(width) {
  return width > 500;
}
function GameButton({ handleTap, handleRelease, direction }) {
  const { width } = useWindowDimensions();

  if (isMobile(width)) {
    return (
      <StyledInputButton onMouseDown={handleTap} onMouseUp={handleRelease}>
        <Pointer rotate={direction === "left"} white />
      </StyledInputButton>
    );
  } else {
    return (
      <StyledInputButton
        onTouchStart={e => {
          e.preventDefault();
          handleTap();
        }}
        onTouchEnd={e => {
          e.preventDefault();
          handleRelease();
        }}
        onContextMenu={e => e.preventDefault()}
      >
        <Pointer rotate={direction === "left"} white />
      </StyledInputButton>
    );
  }
}

export default GameButton;

GameButton.propTypes = {
  handleRelease: PropTypes.func,
  handleTap: PropTypes.func,
  direction: PropTypes.string
};
