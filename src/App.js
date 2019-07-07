import React from "react";
import Pads from "./components/Pads";
import styled from "styled-components";

const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Main>
      <Pads />
    </Main>
  );
}

export default App;
