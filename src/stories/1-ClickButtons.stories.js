import React from "react";
import Button, { ButtonAlt } from "../components/Button";

export default {
  title: "Buttons"
};

export const DefaultActive = () => (
  <Button active={true} onClick={() => console.log("clicked")}>
    Active Button
  </Button>
);

export const DefaultInactive = () => (
  <Button active={false} onClick={() => console.log("clicked")}>
    inactive Button
  </Button>
);

export const DefaultActiveBig = () => (
  <Button active={true} big={true} onClick={() => console.log("clicked")}>
    Active Button
  </Button>
);

export const DefaultInactiveBig = () => (
  <Button active={false} big={true} onClick={() => console.log("clicked")}>
    inactive Button
  </Button>
);

export const DefaultActiveAltBig = () => (
  <ButtonAlt active={true} big={true} onClick={() => console.log("clicked")}>
    active AltButton
  </ButtonAlt>
);
