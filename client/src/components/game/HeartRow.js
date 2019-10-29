import React from "react";
import styled, { css } from "styled-components";
import SingleHeart from "../../ressources/icons/SingleHeart";

const Container = styled.div`
  background: "transparent";
  position: absolute;
  ${props =>
    props.p1
      ? css`
          left: 10px;
          top: 10px;
        `
      : css`
          right: 10px;
          bottom: 10px;
        `}
`;

function HeartRow({ lifes, p1 }) {
  return (
    <Container p1={p1}>
      <SingleHeart filled={p1 ? lifes >= 1 : lifes >= 5} />
      <SingleHeart filled={p1 ? lifes >= 2 : lifes >= 4} />
      <SingleHeart filled={p1 ? lifes >= 3 : lifes >= 3} />
      <SingleHeart filled={p1 ? lifes >= 4 : lifes >= 2} />
      <SingleHeart filled={p1 ? lifes >= 5 : lifes >= 1} />
    </Container>
  );
}

export default HeartRow;