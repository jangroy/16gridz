import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import DrumMachine from "./components/DrumMachine";
import Transport from "./components/Transport";
import Tone from "tone";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import theme from "styled-theming";
import { enableWebMidi } from "./webmidi";
import { GlobalContext } from "./context.js";
import { useFirebaseStorage } from "./hooks/firebase";
import { device } from "./styles/global/variables/sizes";

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Body = styled.section`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  transition: 0.2s ease;

  @media ${device.tablet} {
    flex-direction: row;
  }
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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { storageItems } = useFirebaseStorage();

  useEffect(() => {
    enableWebMidi();
  }, []);

  const [currentPadId, setCurrentPadId] = useState();
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
      value={{
        currentPadId,
        setCurrentPadId,
        isSidebarOpen,
        setSidebarOpen,
        storageItems
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <PageContainer>
          {/* <Header /> */}
          <Body>
            <Sidebar />
            {/* <Transport /> */}
            <DrumMachine />
            {/* <State>currentPadId: {currentPadId}</State> */}
          </Body>
        </PageContainer>
      </DndProvider>
    </GlobalContext.Provider>
  );
};

export default App;
