import React from "react";
import GameButton, { ConcedeButton } from "../components/GameInput";

export default {
  title: "Game Input Buttons"
};

export const LeftButton = () => (
  <GameButton onClick={() => console.log("left")} direction={"left"} />
);
export const RightButton = () => (
  <GameButton onClick={() => console.log("right")} direction={"right"} />
);
export const Concede = () => (
  <ConcedeButton onClick={() => console.log("clicked")}></ConcedeButton>
);
