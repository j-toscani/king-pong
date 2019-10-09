import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

export default {
  title: "Buttons"
};

const ButtonAlt = styled(Button)`
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFont};
  border: ${props => props.theme.contrast};
`;

export const Active = () => (
  <Button active={true} onClick={() => console.log("clicked")}>
    Active Button
  </Button>
);

export const Inactive = () => (
  <Button active={false} onClick={() => console.log("clicked")}>
    inactive Button
  </Button>
);

export const ActiveAlt = () => (
  <ButtonAlt active={true} onClick={() => console.log("clicked")}>
    active AltButton
  </ButtonAlt>
);
