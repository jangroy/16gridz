import React, { useState, useEffect } from "react";
import DrumMachine from "./components/DrumMachine";
import Transport from "./components/Transport";
import Tone from "tone";
import Top from "./components/Top";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import theme from "styled-theming";
import PadsContext from "./context.js";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [bpm, setBpm] = useState(120);

  return (
    <PadsContext.Provider value={{ bpm, setBpm }}>
      <MainContainer>
        <Sidebar />
        <BodyContainer>
          {/* <Top /> */}
          {/* <Transport /> */}
          <DrumMachine />
        </BodyContainer>
      </MainContainer>
    </PadsContext.Provider>
  );
};

export default App;
