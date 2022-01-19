import styled from "styled-components/macro";
import { DefaultButton } from "./components/DefaultButton";
function App() {
  return (
    <Wrapper>
      <DefaultButton>click me first</DefaultButton>
      <DefaultButton large={true}>click me second</DefaultButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
`;

export default App;
