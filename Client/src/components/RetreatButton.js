import React from "react";
import styled, { css } from "styled-components";
import Pointer from "../ressources/icons/Pointer";

const RetreatStyled = styled.button`
  ${props =>
    props.disabled
      ? css`
          display: none;
        `
      : css`
          background: ${props.theme.contrast};
          color: ${props.theme.brightFont};
          font-size: 24px;
          padding-left: 35px;
          padding-right: 10px;
          width: 260px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: none;
        `}
`;

function RetreatButton({ handleClick, name }) {
  return (
    <RetreatStyled onClick={() => handleClick(name)} name={name}>
      {name}
      <Pointer rotate={true} />
    </RetreatStyled>
  );
}

export default RetreatButton;
