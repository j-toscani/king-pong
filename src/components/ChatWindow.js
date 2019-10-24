import React from "react";
import StyledWindow from "./StyledWindow";
import ChatHistory from "./ChatHistory";
import ChatBar from "./ChatBar";
import subscribeToTimer from "../api";

function ChatWindow({ handleSubmitMessage }) {
  const [timestamp, setTimestamp] = React.useState("no timestamp yet");

  React.useEffect(
    () => subscribeToTimer((err, timestamp) => setTimestamp(timestamp)),
    [timestamp]
  );

  console.log(timestamp);
  return (
    <StyledWindow chat>
      <ChatHistory message={{ timestamp }}></ChatHistory>
      <ChatBar handleSubmitMessage={handleSubmitMessage}></ChatBar>
    </StyledWindow>
  );
}

export default ChatWindow;
