import React from "react";
import WinLossWindow from "../components/WinLossWindow";

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

export const Win = () => (
  <WinLossWindow onClick={() => console.log("win")} player={p1} />
);
export const Loss = () => (
  <WinLossWindow onClick={() => console.log("loss")} player={p2} />
);
