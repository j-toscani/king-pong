import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";

const StyledCanvas = styled.canvas`
  background: ${props => props.theme.accent};
`;

const GameContainer = styled.section`
  margin: 0;
  padding: 0;
  position: relative;
`;

export default function GameBoard(props) {
  //include gameobjects as the state
  //include draw-function to draw everything once when canvas gets clicked, fiddle around with positioning
  // implement gameloop to let the ball bounce araound
  // implement controles

  const canvasRef = React.useRef(null);
  console.log(props.change);
  React.useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let requestId,
      i = 0,
      o = 0,
      w = false,
      h = true;
    console.log(i);

    const draw = () => {
      ctx.clearRect(0, 0, 295, 400);
      ctx.fillRect(o, i, 10, 10);
      if (i > 200) {
        w = true;
        h = false;
      }
      if (w) {
        o += 1;
      }
      if (h) {
        i += 1;
      }
      requestId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <GameContainer>
      <HeartRow p1></HeartRow>
      <HeartRow p1={false} lifes={4}></HeartRow>

      <StyledCanvas width="295" height="400" ref={canvasRef}></StyledCanvas>
    </GameContainer>
  );
}
