import React from "react";
import styled from "styled-components";
import SwitchButton from "./SwitchButton";
import PropTypes from "prop-types";

const Option = styled.div`
  font-size: 22px;
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
        Colors
        <SwitchButton
          id={"Colors"}
          mode={settings.colors}
          onClick={() => setSettings("colors")}
        />
      </Option>
    </Container>
  );
}

Settings.propTypes = {
  setSettings: PropTypes.func,
  settings: PropTypes.object
};
