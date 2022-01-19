import styled, { css } from "styled-components/macro";


//by the below way we can set the attributes or we can access the attributes 
//and manipulate it in styled components
export const DefaultButton = styled.button.attrs((props)=>{
   return {
     type:props.type? props.type :"button",
  }
})`
  background: blue;
  color: #ffff;
  border: none;
  border-radius: 0.25rem;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
  ${({large}) => {
    return large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `;
  }}
`;

export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: blue;
  border: 1px solid orange;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;
