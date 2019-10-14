import React from "react";
import styled from "styled-components";
import Settings from "./Settings";
import RetreatButton from "./RetreatButton";

// const Background = styled.div`
//   position: absolute;

//   width: 100vw;
//   max-width: 360px;
//   min-height: 550px;
//   filter: blur(4px);
//   opacity: 0.8;
//   z-index: -1;
//   width: 100%;
//   background: ${props => props.theme.main};

//   padding-top: 50px;
//   padding-bottom: 35px;
// `;

const OverlayContainer = styled.section`
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.5s;
  width: 75vw;
  max-width: 360px;
  height: 100%;
  min-height: 550px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 35px;
  position: absolute;
  background: ${props => props.theme.main};
  left: 0;
`;

const BottomContainer = styled.div`
  height: 135px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Overlay({ open }) {
  return (
    <OverlayContainer open={open}>
      <Settings></Settings>
      <BottomContainer>
        <RetreatButton name={"Profile"}></RetreatButton>
        <RetreatButton name={"About"}></RetreatButton>
      </BottomContainer>
    </OverlayContainer>
  );
}

export default Overlay;
