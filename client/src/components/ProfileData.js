import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getItem } from "../ressources/scripts/storage";

const Container = styled.div`
  width: 100vw;
  max-width: 400px;
  justify-content: ${props => (props.alt ? "space-around" : "space-between")};
  height: ${props => (props.alt ? "100px" : "90px")};
  background: ${props => (props.alt ? props.theme.main : props.theme.contrast)};
  color: ${props => props.theme.brightFont};
  font-size: 24px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  text-align: center;
`;

function ProfileData() {
  return (
    <div>
      <Container>
        <span>Name:</span>
        <span>{getItem("nickname")}</span>
      </Container>
      <Container alt="true">
        <div>
          {getItem("won") || 0} <hr></hr> Won
        </div>
        :
        <div>
          {getItem("lost") || 0}
          <hr></hr> Lost
        </div>
      </Container>
      <Container>
        <span>Rank :</span>
        <span>{"tba"}</span>
      </Container>
    </div>
  );
}

export default ProfileData;

ProfileData.propTypes = {
  user: PropTypes.object
};
