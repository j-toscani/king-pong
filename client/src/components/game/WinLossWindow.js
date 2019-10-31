import styled from "styled-components";
import React from "react";
import StyledWindow from "../StyledWindow";
import Button from "../Button";

const Headline = styled.h3`
  font-size: 20px;
  margin: 0;
`;

const StyledWindowSee = styled(StyledWindow)`
  opacity: 0.8;
`;

function WinLossWindow({ handleClick, lifes }) {
  return (
    <>
      {lifes && lifes.opponent === 0 && (
        <StyledWindowSee>
          <Headline>You won!</Headline>
          <Button active onClick={handleClick}>
            Back to Play
          </Button>
        </StyledWindowSee>
      )}
      {lifes && lifes.you === 0 && (
        <StyledWindowSee>
          <Headline>You lost!</Headline>
          <Button active onClick={handleClick}>
            Back to Play
          </Button>
        </StyledWindowSee>
      )}
    </>
  );
}

export default WinLossWindow;
