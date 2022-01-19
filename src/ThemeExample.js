import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-styles";

const BaseTheme = {
  color: "#222",
  background: "#fff",
};

const DarkTheme = {
  color: "#fff",
  background: "#222",
};

const Container = styled.div`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App() {
  const [theme,setTheme]=useState(true);
  return (
    <ThemeProvider theme={theme?BaseTheme:DarkTheme}>
      <GlobalStyles></GlobalStyles>
      <Container>
        <h1>hello world</h1>
        <button onClick={()=>{
          setTheme(!theme)
        }} className="btn">toggle me </button>
      </Container>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
`;

export default App;
