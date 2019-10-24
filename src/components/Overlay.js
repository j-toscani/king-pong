import React from "react";
import styled from "styled-components";
import Settings from "./Settings";
import RetreatButton from "./RetreatButton";
import { useHistory } from "react-router-dom";

const OverlayContainer = styled.section`
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.5s;
  left: 0;
  width: 75vw;
  max-width: 360px;
  height: 100%;
  min-height: 550px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 35px;
  padding-bottom: 35px;
  position: absolute;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.main};
`;

const Background = styled.div`
  background-color: transparent;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-100%)")};
`;

const BottomContainer = styled.div`
  height: 135px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Overlay({ setSettings, settings, inGame }) {
  let history = useHistory();

  const [visible, setVisible] = React.useState(!settings.open);

  React.useEffect(() => setVisible(settings.open), [settings.open]);

  function handleClick(destination) {
    history.push(`/${destination}`);
  }
  return (
    <>
      <Background
        opene={visible}
        onClick={() => setSettings("open")}
      ></Background>
      <OverlayContainer open={visible}>
        <Settings setSettings={setSettings} settings={settings}></Settings>
        {!inGame && (
          <BottomContainer>
            <RetreatButton
              handleClick={handleClick}
              name={"Profile"}
            ></RetreatButton>
            <RetreatButton
              handleClick={handleClick}
              name={"About"}
            ></RetreatButton>
          </BottomContainer>
        )}
      </OverlayContainer>
    </>
  );
}

export default Overlay;
