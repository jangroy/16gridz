import React, { useState, useEffect } from "react";
import DrumMachine from "./components/DrumMachine";
import Transport from "./components/Transport";
import Tone from "tone";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import theme from "styled-theming";
import { GlobalContext } from "./context.js";

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Body = styled.section`
  background: blue;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

const State = styled.div`
  position: fixed;
  min-height: 100px;
  min-width: 100px;
  background: lightgray;
  top: 0;
  right: 0;
`;

const App = () => {
  const [currentPadId, setCurrentPadId] = useState();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // current pad side effects
  useEffect(
    function checkcurrentPadId() {
      if (typeof currentPadId !== "undefined") {
        console.log("currentPadId", currentPadId);
      }
    },
    [currentPadId]
  );

  return (
    <GlobalContext.Provider
      value={{ currentPadId, setCurrentPadId, isSidebarOpen, setSidebarOpen }}
    >
      <PageContainer>
        {/* <Header /> */}
        <Body>
          <Sidebar />
          {/* <Transport /> */}
          <DrumMachine />
          <State>currentPadId: {currentPadId ? currentPadId : "null"}</State>
        </Body>
      </PageContainer>
    </GlobalContext.Provider>
  );
};

export default App;
