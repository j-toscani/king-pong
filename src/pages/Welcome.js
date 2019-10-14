import React from "react";
import styled from "styled-components";
import { TopPointer } from "../components/Top";

const StyledMain = styled.main`
  background: ${props => props.theme.contrast};
`;

export default function Welcome() {
  return (
    <>
      <TopPointer headline={"KingPong"}></TopPointer>
      <StyledMain>This is th Welcome Page</StyledMain>
    </>
  );
}
