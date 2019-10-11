import styled, { css } from "styled-components";

const StyledWindow = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  background: ${props => props.theme.contrast};
  height: 250px;
  width: 290px;

  ${props =>
    props.chat
      ? css`
          margin-top: auto;
        `
      : css`
          justify-content: space-around;
          text-align: center;
          padding: 15px;
          color: ${props => props.theme.brightFont};
        `}
`;

export default StyledWindow;
