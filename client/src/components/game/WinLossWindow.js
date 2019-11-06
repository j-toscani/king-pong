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
  z-index: 15;
  position: absolute;
`;

function WinLossWindow({ handleClick, lifes }) {
  console.log(lifes);
  return (
    <>
      {lifes.playerTwo === 0 && (
        <StyledWindowSee>
          <Headline>You won!</Headline>
          <p>Your opponent either condeded or lost all lifes!</p>
          <Button active onClick={handleClick}>
            Back to Play
          </Button>
        </StyledWindowSee>
      )}
      {lifes.playerOne === 0 && (
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
