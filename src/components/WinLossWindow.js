import styled from "styled-components";
import React from "react";
import StyledWindow from "./StyledWindow";
import Button from "./Button";

const Headline = styled.h3`
  font-size: 20px;
  margin: 0;
`;

const StyledWindowSee = styled(StyledWindow)`
  opacity: 0.8;
`;

function WinLossWindow({ player, onClick }) {
  if (player.win === true) {
    return (
      <StyledWindowSee>
        <Headline>{player.cheer}</Headline>
        <div>{player.message}</div>
        <Button active onClick={onClick}>
          Back to Play
        </Button>
      </StyledWindowSee>
    );
  } else if (player.win !== true) {
    return (
      <StyledWindowSee>
        <Headline>{player.cheer}</Headline>
        <div>{player.message}</div>
        <Button active onClick={onClick}>
          Back to Play
        </Button>
      </StyledWindowSee>
    );
  }
}

export default WinLossWindow;
