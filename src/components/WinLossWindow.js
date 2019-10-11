import styled, { css } from "styled-components";
import React from "react";
import Button from "./Button";

const StyledWindow = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  background: ${props => props.theme.contrast};
  height: 250px;
  width: 290px;
  padding: 5px;

  ${props =>
    props.chat
      ? css`
          margin-top: auto;
        `
      : css`
          justify-content: space-around;
          text-align: center;
          padding: 15px;
          color: ${props => props.theme.brightFont};
        `}
`;

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
