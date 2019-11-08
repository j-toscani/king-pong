import React from "react";
import styled, { css } from "styled-components";
import SingleHeart from "../../ressources/icons/SingleHeart";
import PropTypes from "prop-types";

const Container = styled.div`
  background: "transparent";
  position: absolute;
  z-index: 10;
  ${props =>
    props.p1
      ? css`
          right: 10px;
          bottom: 10px;
        `
      : css`
          left: 10px;
          top: 10px;
        `}
`;

function HeartRow({ lifes, p1 }) {
  return (
    <Container p1={p1}>
      <SingleHeart filled={p1 ? lifes >= 5 : lifes >= 1} />
      <SingleHeart filled={p1 ? lifes >= 4 : lifes >= 2} />
      <SingleHeart filled={p1 ? lifes >= 3 : lifes >= 3} />
      <SingleHeart filled={p1 ? lifes >= 2 : lifes >= 4} />
      <SingleHeart filled={p1 ? lifes >= 1 : lifes >= 5} />
    </Container>
  );
}

export default HeartRow;

HeartRow.propTypes = {
  p1: PropTypes.bool,
  lifes: PropTypes.number
};
