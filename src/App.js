import React, { useState, useEffect } from "react";
import DrumMachine from "./components/DrumMachine";
import Transport from "./components/Transport";
import Tone from "tone";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import theme from "styled-theming";
import { enableWebMidi } from "./webmidi";
import { GlobalContext } from "./context.js";
import { firebaseStorage } from "./config/firebase";

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
  const [libraryItems, setLibraryItems] = useState();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const loadLibrary = () => {
      const storageRef = firebaseStorage.ref("/samples/kicks/");

      const getUrl = itemRef => {
        return new Promise(resolve => {
          itemRef.getDownloadURL().then(url => {
            resolve(url);
          });
        });
      };

      const getName = itemRef => {
        return itemRef.name.split(".")[0];
      };
      const normalizeStorageItems = async item => {
        const url = await getUrl(item);
        const name = getName(item);
        return { url, name };
      };

      storageRef
        .listAll()
        .then(storageResults => {
          const mapItems = async () => {
            return await Promise.all(
              storageResults.items.map(itemRef => {
                return normalizeStorageItems(itemRef);
              })
            );
          };
          mapItems().then(items => setLibraryItems(items));
        })
        .catch(error => {
          console.log(
            "There was an error fetching from Firebase storage:",
            error
          );
        });
    };
    loadLibrary();
    enableWebMidi();
  }, []);
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
        libraryItems
      }}
    >
      <PageContainer>
        {/* <Header /> */}
        <Body>
          <Sidebar />
          {/* <Transport /> */}
          <DrumMachine />
          <State>currentPadId: {currentPadId}</State>
        </Body>
      </PageContainer>
    </GlobalContext.Provider>
  );
};

export default App;
