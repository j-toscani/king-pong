import React from "react";
import StyledWindow from "./StyledWindow";
import Button from "./Button";
import { Input } from "./ChatBar";
import styled from "styled-components";

const NameInput = styled(Input)`
  border-radius: 10px;
  text-align: center;
`;

const Headline = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 400;
  font-style: none;
`;

const StyledWindowGreeting = styled(StyledWindow)`
  height: 320px;
  align-items: center;
  justify-content: space-around;
`;

function GreetingWindow() {
  const [nickname, setNickname] = React.useState("");
  function submitNickname() {
    console.log(nickname);
  }
  return (
    <StyledWindowGreeting>
      <Headline>
        Please Enter <br></br>your nickname:
      </Headline>
      <NameInput
        placeholder="Tap to enter..."
        onChange={event => setNickname(event.target.value)}
      ></NameInput>
      <Button big active onClick={submitNickname}>
        Start!
      </Button>
    </StyledWindowGreeting>
  );
}

export default GreetingWindow;
