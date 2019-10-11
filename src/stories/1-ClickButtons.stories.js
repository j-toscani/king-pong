import React from "react";
import Button, { AltButton } from "../components/Button";

export default {
  title: "Buttons"
};

export const DefaultActive = () => (
  <Button onClick={() => console.log("clicked")}>Active Button</Button>
);

export const DefaultInactive = () => (
  <Button disabled onClick={() => console.log("clicked")}>
    inactive Button
  </Button>
);

export const DefaultActiveBig = () => (
  <Button big onClick={() => console.log("clicked")}>
    Active Button
  </Button>
);

export const DefaultInactiveBig = () => (
  <Button disabled big onClick={() => console.log("clicked")}>
    inactive Button
  </Button>
);

export const DefaultActiveAltBig = () => (
  <AltButton big onClick={() => console.log("clicked")}>
    active AltButton
  </AltButton>
);
