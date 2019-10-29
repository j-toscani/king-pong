import React from "react";
import styled from "styled-components";
import SwitchButton from "./SwitchButton";

const Option = styled.div`
  font-size: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

const Container = styled.section`
  padding-left: 40px;
  padding-right: 40px;
  border: none;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFont};
`;

export default function Settings({ setSettings, settings }) {
  return (
    <Container>
      <Option>
        Darkmode
        <SwitchButton
          id={"Darkmode"}
          mode={settings.darkmode}
          onClick={() => {
            setSettings("darkmode");
          }}
        />
      </Option>
      <Option>
        Sound
        <SwitchButton
          id={"Sound"}
          mode={settings.sound}
          onClick={() => setSettings("sound")}
        />
      </Option>
    </Container>
  );
}