import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";

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
  const [ball, changeState] = React.useState({
    x: 1,
    y: 1,
    dx: 1,
    dy: 1
  });
  const [lifes, setLifes] = React.useState(5);

  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (lifes > 0) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext("2d");
      let requestId;
      const board = {
        x: 295,
        y: 400
      };
      const draw = object => {
        ctx.clearRect(0, 0, 295, 400);
        ctx.fillRect(object.x, object.y, 10, 10);
        requestId = requestAnimationFrame(() => draw(ball));
        if (object.x > board.x - 10 || object.x < 0) {
          object.dx *= -1;
        }
        if (object.y > board.y - 10 || object.y < 0) {
          object.dy *= -1;
          const lifeLost = lifes - 1;
          setLifes(lifeLost);
          console.log(lifes);
        }
        object.x += object.dx;
        object.y += object.dy;
        changeState(object);
      };

      draw(ball);
      return () => {
        cancelAnimationFrame(requestId);
      };
    } else {
      alert("Game Over");
      handleGameEnding();
    }
  }, [lifes, ball.dy]);

  let history = useHistory();

  function handleGameEnding() {
    history.push(`/select`);
  }

  return (
    <GameContainer>
      <HeartRow p1></HeartRow>
      <HeartRow p1={false} lifes={lifes}></HeartRow>

      <StyledCanvas
        width="295"
        height="400"
        ref={canvasRef}
        onClick={() => {
          console.log(ball.dy);
          if (ball.dy === 1) {
            console.log("hey");
            changeState(prevState => {
              return { ...prevState, dy: -1 };
            });
          } else {
            console.log("ho");
            changeState(prevState => {
              return { ...prevState, dy: 1 };
            });
          }
        }}
      ></StyledCanvas>
    </GameContainer>
  );
}
