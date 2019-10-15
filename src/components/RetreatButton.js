import React from "react";
import styled from "styled-components";
import Pointer from "../ressources/icons/Pointer";

const RetreatStyled = styled.button`
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFont};
  font-size: 24px;
  padding-left: 35px;
  padding-right: 10px;
  width: 260px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
`;

function RetreatButton({ name }) {
  return (
    <RetreatStyled name={name}>
      {name}
      <Pointer rotate={true} />
    </RetreatStyled>
  );
}

export default RetreatButton;
