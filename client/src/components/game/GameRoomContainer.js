import styled from "styled-components";

const GameRoomContainer = styled.main`
  height: 100%;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;

export default GameRoomContainer;
