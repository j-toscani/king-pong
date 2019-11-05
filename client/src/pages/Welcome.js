import React from "react";
import styled from "styled-components";
import HeaderLogo from "../components/header/HeaderLogo";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import animationDraw from "../ressources/welcomeAnimation/animationDraw";

const StyledMain = styled.main`
  background: ${props => props.theme.contrast};
`;

const WelcomeWindow = styled.section`
  background: ${props => props.theme.accent};
  width: 270px;
  height: 420px;
  padding: 20px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 10px;
`;

const CanvasStyled = styled.canvas`
  margin: auto;
`;

export default function Welcome() {
  let history = useHistory();

  function handleClick() {
    history.push("/entername");
  }

  const [animationObjects, setAnimationObjects] = React.useState({
    x: 100,
    y: 100,
    w: 10,
    dx: 2,
    dy: 2
  });

  const animation = React.useRef(null);

  React.useEffect(() => {
    let canvas = animation.current;
    let ctx = canvas.getContext("2d");
    let currentFrame;
    animationDraw(ctx, currentFrame, animationObjects, setAnimationObjects);
    return () => {
      cancelAnimationFrame(currentFrame);
    };
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
