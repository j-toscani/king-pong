import React from "react";
import StyledWindow from "./StyledWindow";
import Button from "./Button";
import { Input } from "./ChatBar";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

function GreetingWindow({ setNickname }) {
  const [inputValue, setInputValue] = React.useState(null);

  let history = useHistory();

  function handleClick(destination) {
    history.push(`/${destination}`);
  }

  function submitNickname() {
    const nickname = inputValue;
    setNickname(nickname);
    alert(`Hello ${nickname}, let´s play Pong!`);
    handleClick("select");
  }
  return (
    <StyledWindowGreeting>
      <Headline>
        Please Enter <br></br>your nickname:
      </Headline>
      <NameInput
        placeholder="Tap to enter..."
        onChange={event => setInputValue(event.target.value)}
      ></NameInput>
      <Button big active onClick={submitNickname}>
        Start!
      </Button>
    </StyledWindowGreeting>
  );
}

export default GreetingWindow;
