import React from "react";
import styled from "styled-components";

function Heart({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.531"
      height="14.546"
      viewBox="0 0 16.531 14.546"
      className={className}
    >
      <g transform="translate(0.5 0.5)">
        <path
          d="M16.656,5.695a4.086,4.086,0,0,0-5.78,0l-.788.788L9.3,5.695a4.087,4.087,0,1,0-5.78,5.78l.788.788,5.78,5.78,5.78-5.78.788-.788a4.086,4.086,0,0,0,0-5.78Z"
          transform="translate(-2.323 -4.497)"
        />
      </g>
    </svg>
  );
}

const StyledHeart = styled(Heart)`
  fill: ${props => (props.filled ? "#a50321" : "transparent")};
  stroke: #bf6b3b;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export default function SingleHeart({ filled }) {
  return <StyledHeart filled={filled} />;
}
