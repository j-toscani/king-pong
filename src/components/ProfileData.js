import React from "react";
import styled from "styled-components";

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

function ProfileData({ user }) {
  return (
    <dic>
      <Container>
        <span>Name:</span>
        <span>Wurstinator</span>
      </Container>
      <Container alt={true}>
        <div>
          {user.wins} <hr></hr> Won
        </div>
        :
        <div>
          {user.losses}
          <hr></hr> Lost
        </div>
      </Container>
      <Container>
        <span>Rank :</span>
        <span>{`# ${user.rank}`}</span>
      </Container>
    </dic>
  );
}

export default ProfileData;
