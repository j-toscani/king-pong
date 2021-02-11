import React from "react";
import styled from "styled-components";
import HeaderLogo from "../components/header/HeaderLogo";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import animationDraw from "../ressources/welcomeAnimation/animationDraw";
import createAnimationObjects from "../ressources/welcomeAnimation/createAnimationObjects";

const StyledMain = styled.main`
  background: ${props => props.theme.contrast};
`;

const CanvasStyled = styled.canvas`
  margin: auto;
`;

const WelcomeWindow = styled.section`
  background: ${props => props.theme.accent};
  width: 270px;
  height: 420px;
  padding: 20px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 10px;
`;

export default function Welcome() {
  let history = useHistory();

  function handleClick() {
    history.push("/entername");
  }

  const [animationObjects, setAnimationObjects] = React.useState(
    createAnimationObjects()
  );

  const animation = React.useRef(null);

  React.useEffect(() => {
    let canvas = animation.current;
    let ctx = canvas.getContext("2d");
    let lastFrame;
    const drawLoop = () => {
      animationDraw(ctx, animationObjects);
      lastFrame = requestAnimationFrame(() => drawLoop());
    };
    drawLoop();
    return () => cancelAnimationFrame(lastFrame);
  }, []);

  return (
    <>
      <HeaderLogo headline={"KingPong"}></HeaderLogo>
      <StyledMain>
        <WelcomeWindow>
          <CanvasStyled
            ref={animation}
            width="200px"
            height="280px"
          ></CanvasStyled>
          <Button alter big onClick={handleClick}>
            Tap to start!
          </Button>
        </WelcomeWindow>
      </StyledMain>
    </>
  );
}
