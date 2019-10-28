import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  ${props =>
    props.disabled
      ? css`
          background: ${props.theme.main};
          color: ${props.theme.contrast};
          border: solid 2px ${props.theme.contrast};
        `
      : css`
          background: ${props.theme.accent};
          color: ${props.theme.darkFont};
          border: solid 2px ${props.theme.accent};
        `}
  ${props =>
    props.big
      ? css`
          height: 50px;
          padding: 0;
          margin: 0;
          width: 235px;
          font-size: 24px;
        `
      : css`
          min-width: 100px;
          height: 35px;
          font-size: 20px;
          padding-left: 4%;
          padding-right: 4%;
        `}
  ${props =>
    props.alt
      ? css`
          background: ${props.theme.contrast};
          color: ${props.theme.brightFont};
          fill: ${props.theme.brightFont};
          border: ${props.theme.contrast};
        `
      : ""}
`;

export default Button;
