import React from "react";
import styled from "styled-components";
import { TopPointer } from "../components/Top";
import ProfileData from "../components/ProfileData";

const Container = styled.main`
  background: ${props => props.theme.accent};
  flex-direction: column;
`;

const GameInfo = styled.div`
  background: ${props => props.theme.contrast};
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 40px;
  width: 100vw;
  font-size: 20px;
  line-height: 1.5em;
  color: ${props => props.theme.brightFont};
`;

export default function About() {
  return (
    <>
      <TopPointer headline={"About"}></TopPointer>
      <Container>
        <GameInfo>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, sint!
          Perspiciatis impedit quibusdam esse necessitatibus labore? Quae error
          iusto explicabo sequi accusamus accusantium! Ad, quos aut quaerat
          neque corrupti dolorem.Neque voluptatem, fugiat aperiam autem,
          accusamus ipsam, provident ea tempora similique esse omnis voluptatum
          dicta delectus! Et, nulla. Aut quia accusamus asperiores expedita iste
          molestias, obcaecati assumenda quisquam ipsum saepe?
        </GameInfo>
        <GameInfo>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, sint!
          Perspiciatis impedit quibusdam esse necessitatibus labore? Quae error
          iusto explicabo sequi accusamus accusantium! Ad, quos aut quaerat
          neque corrupti dolorem.Neque voluptatem, fugiat aperiam autem,
          accusamus ipsam, provident ea tempora similique esse omnis voluptatum
          dicta delectus! Et, nulla. Aut quia accusamus asperiores expedita iste
          molestias, obcaecati assumenda quisquam ipsum saepe?
        </GameInfo>
      </Container>
    </>
  );
}
