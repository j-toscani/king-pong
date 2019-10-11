import styled from "styled-components";
import React from "react";
import StyledWindow from "./StyledWIndow";
import Button from "./Button";

const Cheer = styled.h3`
  font-size: 20px;
  margin: 0;
`;

function WinLossWindow({ player, onClick }) {
  if (player.win === true) {
    return (
      <StyledWindow>
        <Cheer>{player.cheer}</Cheer>
        <div>{player.message}</div>
        <Button active onClick={onClick}>
          Back to Play
        </Button>
      </StyledWindow>
    );
  } else if (player.win !== true) {
    return (
      <StyledWindow>
        <Cheer>{player.cheer}</Cheer>
        <div>{player.message}</div>
        <Button active onClick={onClick}>
          Back to Play
        </Button>
      </StyledWindow>
    );
  }
}

export default WinLossWindow;
