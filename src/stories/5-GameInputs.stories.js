import React from "react";
import GameButton, { ConcedeButton } from "../components/GameInput";

export default {
  title: "Game Input Buttons"
};

export const LeftButton = () => <GameButton direction={"left"} />;
export const RightButton = () => <GameButton direction={"right"} />;
export const Concede = () => <ConcedeButton></ConcedeButton>;
