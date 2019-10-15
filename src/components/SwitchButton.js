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
  background: ${props => props.theme.brightFont};
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
  ${props =>
    props.active
      ? css`
          position: absolute;
          transform: translateX(30px);
          transition-delay: 500;
        `
      : css`
          left: 5px;
          position: absolute;
          transition-delay: 500;
        `}
`;

export default function SwitchButton({ id, active, handleChange }) {
  return (
    <Background>
      <Point htmlFor={id} active={active}></Point>
      <Switch
        id={id}
        active={active}
        onChange={handleChange}
        type="checkbox"
      ></Switch>
    </Background>
  );
}
