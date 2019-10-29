import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFont};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 30px;
  width: 100%;
`;

export default StyledHeader;
