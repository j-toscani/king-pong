import React from "react";
import styled from "styled-components";

const SvgStyled = styled.svg`
  fill: ${props => props.theme.accent};
  height: 40px;
  width: 40px;
`;

function Paddle() {
  return (
    <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.005 36.004">
      <path d="M34.889,20.848A15.122,15.122,0,0,0,10.2,4.437L6.265,8.381,21.136,23.252A10.059,10.059,0,0,1,34.889,20.848Zm-15.321,5.6-15.5-15.49A8.294,8.294,0,0,0,5.287,21.094l2.426,2.433L.471,29.813A1.385,1.385,0,0,0,.4,31.837L4.155,35.6a1.377,1.377,0,0,0,2.018-.07l6.279-7.263,2.51,2.51a8.182,8.182,0,0,0,4.943,2.341,10.025,10.025,0,0,1-.773-3.874,9.694,9.694,0,0,1,.436-2.791ZM29.25,22.5A6.75,6.75,0,1,0,36,29.25,6.752,6.752,0,0,0,29.25,22.5Z" />
    </SvgStyled>
  );
}

export default Paddle;
