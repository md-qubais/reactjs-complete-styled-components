import React from "react";
import styled from "styled-components";

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper className="bg-color">
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="background" >
          <h2>this is another title</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1,h2{
      text-transform: capitalize;
      text-align: center;
  }
  .underline{
      width: 5rem;
      height: 0.25rem;
      background: blue;
      margin: 0 auto;
  }
  .background{
      background-color:orange;
  }
`;

export default ComplexTitle;
