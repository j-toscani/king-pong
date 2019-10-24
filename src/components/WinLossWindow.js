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

function WinLossWindow({ result, onClick, connectedTo }) {
  if (result.winner === "opponent") {
    return (
      <StyledWindowSee>
        <Headline>{result.cheerLoss}</Headline>

        <Button active onClick={onClick}>
          Back to Play
        </Button>
      </StyledWindowSee>
    );
  } else if (result.winner === "player") {
    return (
      <StyledWindowSee>
        <Headline>{result.cheerWin}</Headline>

        <Button active onClick={onClick}>
          Back to Play
        </Button>
      </StyledWindowSee>
    );
  }
}

export default WinLossWindow;
