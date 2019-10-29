import React from "react";
import styled, { css } from "styled-components";

const Background = styled.div`
  display: inline-block;
  margin: 5px;
  border: 1px solid grey;
  border-radius: 10px;
  width: 60px;
  height: 20px;
  position: relative;
  background: ${props =>
    props.active ? props.theme.main : props.theme.brightFont};
`;

const Switch = styled.input`
  display: none;
`;

const Point = styled.label`
  border-radius: 50%;
  background: ${props => props.theme.accent};
  width: 25px;
  height: 25px;
  top: -4px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);

  ${props =>
    props.active
      ? css`
          position: absolute;
          transform: translateX(26px);
          transition: all 0.5;
        `
      : css`
          left: 4px;
          position: absolute;
          transition: all 0.5;
        `};
`;

export default function SwitchButton({ id, mode, onClick }) {
  const [visible, setVisible] = React.useState(!mode);

  return (
    <Background active={visible}>
      <Point htmlFor={id} active={!visible}></Point>
      <Switch
        id={id}
        active={!visible}
        onClick={onClick}
        type="checkbox"
      ></Switch>
    </Background>
  );
}