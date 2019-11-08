import React from "react";
import styled, { css } from "styled-components";
import Pointer from "../../ressources/icons/Pointer";
import PropTypes from "prop-types";

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

function RetreatButton({ onClick, name }) {
  return (
    <RetreatStyled onClick={() => onClick(name)} name={name}>
      {name}
      <Pointer rotate={true} />
    </RetreatStyled>
  );
}

export default RetreatButton;

RetreatButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string
};
