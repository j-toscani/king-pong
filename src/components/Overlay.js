import React from "react";
import styled from "styled-components";
import Settings from "./Settings";
import RetreatButton from "./RetreatButton";

const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  max-width: 360px;
  min-height: 550px;
  width: 100%;
  background: ${props => props.theme.main};
  filter: blur(4px);
  opacity: 0.5;
  padding-top: 50px;
  padding-bottom: 35px;
`;

const OverlayContainer = styled.section`
  width: 75vw;
  max-width: 360px;
  min-height: 550px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 35px;
`;

const BottomContainer = styled.div`
  height: 135px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Overlay() {
  return (
    <>
      <Background></Background>
      <OverlayContainer>
        <Settings></Settings>
        <BottomContainer>
          <RetreatButton name={"Profile"}></RetreatButton>
          <RetreatButton name={"About"}></RetreatButton>
        </BottomContainer>
      </OverlayContainer>
    </>
  );
}

export default Overlay;
