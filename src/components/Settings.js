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

const Container = styled.div`
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

export default function Settings() {
  const [darkmode, setDarkmode] = React.useState(false);
  const [sound, setSound] = React.useState(false);

  return (
    <Container>
      <Option>
        Darkmode
        <SwitchButton
          id={"Darkmode"}
          active={darkmode}
          handleChange={() => {
            setDarkmode(!darkmode);
          }}
        ></SwitchButton>
      </Option>
      <Option>
        Sound
        <SwitchButton
          id={"Sound"}
          active={sound}
          handleChange={() => {
            setSound(!sound);
          }}
        ></SwitchButton>
      </Option>
    </Container>
  );
}
