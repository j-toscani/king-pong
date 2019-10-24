import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

main{
 background: ${props => props.theme.main};
display: flex;
border: none;
  justify-content: center;
  align-items: center;
}

button, input {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
`;
