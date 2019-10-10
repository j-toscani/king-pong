import React from "react";
import styled from "styled-components";

export function Arrow({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.2 28.401"
      className={className}
    >
      <defs></defs>
      <path d="M13.5,9,27.7,23.2,13.5,37.4Z" transform="translate(-13.5 -9)" />
    </svg>
  );
}

const ArrowStyled = styled(Arrow)`
  fill: ${props => (props.white ? props.theme.brightFont : props.theme.accent)};
  height: 40px;
  width: 40px;
  transform: ${props => (props.rotate ? "rotate(180deg)" : "none")};
`;

export default function Pointer({ white, rotate }) {
  return <ArrowStyled white={white} rotate={rotate} />;
}
