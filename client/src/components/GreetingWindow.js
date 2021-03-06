import React from "react";
import StyledWindow from "./StyledWindow";
import Button from "./Button";
import { Input } from "./chat/ChatBar";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { getItem, setItem } from "../ressources/scripts/storage";
import PropTypes from "prop-types";

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
  const [inputValue, setInputValue] = React.useState(null);

  let history = useHistory();

  function routeTo(destination) {
    history.push(`/${destination}`);
  }

  if (getItem() !== null) {
    routeTo("main");
  }

  function submitNickname() {
    if (getItem() === null && inputValue) {
      alert(`Hello ${inputValue}, let´s play Pong!`);
      setItem("nickname", inputValue);
      routeTo("main");
    } else if (!inputValue) {
      alert("Please enter a new nickname.");
    }
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
        Click to set Name.
      </Button>
    </StyledWindowGreeting>
  );
}

export default GreetingWindow;

GreetingWindow.propTypes = {
  setNickname: PropTypes.func
};
