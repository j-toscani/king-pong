import React from "react";
import WinLossWindow from "../components/WinLossWindow";
import ChatWindow from "../components/ChatWindow";

export default {
  title: "Windows"
};

const p1 = {
  win: true,
  cheer: "You Won!",
  message: "Congratulations!"
};
const p2 = {
  win: true,
  cheer: "You Lost...",
  message: "pathetic..."
};

const messages = [
  { p1: true, name: "SirL00t4L0t", content: "lol, n4p" },
  { p1: false, name: "Martin", content: "lol, n4p" },
  { p1: true, name: "SirL00t4L0t", content: "lol, n4p" }
];

export const Win = () => (
  <WinLossWindow onClick={() => console.log("win")} player={p1} />
);
export const Loss = () => (
  <WinLossWindow onClick={() => console.log("loss")} player={p2} />
);

export const Chat = () => (
  <ChatWindow messages={messages} handleSubmitMessage={null}></ChatWindow>
);
