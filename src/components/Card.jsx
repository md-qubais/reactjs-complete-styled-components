import React from "react";
import styled from "styled-components";
const Card = () => {
  return (
    <StyledCard>
      <img
        src={
          "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160"
        }
        alt="furniture image"
      />
      <footer>
        <h4>Product Name</h4>
        <p>$15</p>
      </footer>
      {/* <h4>random stuff</h4> */}
    </StyledCard>
  );
};

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    //effects only to all heading h4 that is inside footer
    h4 {
      text-transform: capitalize;
      color: blueviolet;
      &::before{
        content:"Name :"
        
      }
    }
    p {
      color: var(--primary);
      font-weight: 700;
    }

    //here we are targetting the current container that is footer 
    //with the help of &
    &:hover{
      background: red;
    }
  }

  //this wont effect to the h4 present inside the footer if we wrote
  //any css which targets the h4 inside the footer
  /* h4{
      color: blue;
  } */

  //we can also neglect screen and in the styled components
  @media screen and (min-width: 768px) {
    max-width: 600px;
  }

  transition: all 0.5s ease-in-out;

  /* if i wanted to target the current container  we must go with &
  in below the current container is styled component that is article
  so we are targetting the current container by using &
  */

  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
`;

export default Card;
