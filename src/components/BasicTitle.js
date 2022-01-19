import styled from "styled-components";

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: ${({special})=> special?'blue':'red' };
`;


export default BasicTitle;