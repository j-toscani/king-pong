import React from "react";
import styled from "styled-components";
import SingleHeart from "../ressources/icons/SingleHeart";

const Container = styled.div`
  background: "transparent";
`;

function HeartRow({ lifes, p1 }) {
  return (
    <Container>
      <SingleHeart filled={p1 ? lifes >= 1 : lifes >= 5} />
      <SingleHeart filled={p1 ? lifes >= 2 : lifes >= 4} />
      <SingleHeart filled={p1 ? lifes >= 3 : lifes >= 3} />
      <SingleHeart filled={p1 ? lifes >= 4 : lifes >= 2} />
      <SingleHeart filled={p1 ? lifes >= 5 : lifes >= 1} />
    </Container>
  );
}

export default HeartRow;
