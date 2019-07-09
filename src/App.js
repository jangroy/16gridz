import React, { useState, useEffect } from "react";
import DrumMachine from "./components/DrumMachine";
import Transport from "./components/Transport";
import Top from "./components/Top";
import styled from "styled-components";
import PadsContext from "./context.js";

const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const [bpm, setBpm] = useState(120);
  const [activePad, setActivePad] = useState(false);

  return (
    <PadsContext.Provider value={{ bpm, setBpm, activePad }}>
      <MainContainer>
        <Top />
        <DrumMachine />
      </MainContainer>
    </PadsContext.Provider>
  );
};

export default App;
