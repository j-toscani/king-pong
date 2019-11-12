import React from "react";
import styled from "styled-components";
import HeaderPointer from "../components/header/HeaderPointer";

const Container = styled.main`
  background: ${props => props.theme.accent};
  flex-direction: column;
`;

const ExternalAnker = styled.a`
  text-decoration: none;
  color: ${props => props.theme.accent};
  margin: 3px;
`;

const GameInfo = styled.div`
  background: ${props => props.theme.contrast};
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 40px;
  width: 100vw;
  font-size: 20px;
  line-height: 1.5em;
  color: ${props => props.theme.brightFont};
`;

export default function About() {
  return (
    <>
      <HeaderPointer headline={"About"} />
      <Container>
        <GameInfo>
          King Pong is a retro Pong game developed in React. It´s key features
          are crossplattform play, modern design and online multiplayer. It
          started as a single player game to learn basic JS. The first steps can
          be found
          <ExternalAnker href="https://www.github.com/j-toscani/1st-try-pong">
            here
          </ExternalAnker>
          . KingPong now incorporates all the basic functionalities which are
          necessary for an online-multiplayer game.
        </GameInfo>
        <GameInfo>
          In the beginning the focus was a fun game you could play with your
          friends. In the end, it developed into a journey into the depth of
          "you only understand it if you did it once" - land. Therefore, most my
          accomplishments can be found "under the hood". If you want to have a
          look at the code or have questions visit my git
          <ExternalAnker href="https://www.github.com/j-toscani/king-pong">
            repo
          </ExternalAnker>
          and hit me up: .
        </GameInfo>
      </Container>
    </>
  );
}
