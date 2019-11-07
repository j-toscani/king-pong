import styled, { css } from "styled-components";

const StyledWindow = styled.div`
  display: flex;
  border-radius: 0 0 10px 10px;
  background: ${props => props.theme.contrast};
  height: 250px;
  width: 280px;
  ${props =>
    props.chat
      ? css`
      padding= 0;
      flex-direction: column;
      `
      : css`
          justify-content: space-around;
          text-align: center;
          padding: 15px;
          color: ${props => props.theme.brightFont};
          flex-direction: column;
        `}
`;

export default StyledWindow;
