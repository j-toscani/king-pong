import React from "react";
import Button from "../components/Button";
import SwitchButton from "../components/SwitchButton";

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
  <Button alt big onClick={() => console.log("clicked")}>
    active AltButton
  </Button>
);

export const Switch = () => {
  const [active, setActive] = React.useState(false);
  return (
    <SwitchButton
      id={"name"}
      active={active}
      handleChange={() => {
        setActive(!active);
      }}
    ></SwitchButton>
  );
};
