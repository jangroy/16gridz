import React, { useState, useEffect } from "react";
import DrumMachine from "./components/DrumMachine";
import Transport from "./components/Transport";
import Top from "./components/Top";
import styled from "styled-components";
import theme from "styled-theming";
import PadsContext from "./context.js";
import { firebaseConfig } from "./config/firebaseconfig";
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const storageRef = storage.ref("/samples/kicks/");

storageRef
  .listAll()
  .then(result => {
    console.log("results", result.items);
    result.items.forEach(itemRef => {
      itemRef.getDownloadURL().then(url => {
        console.log("url", url);
      });
    });
  })
  .catch(error => {
    console.log(error);
  });

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

  return (
    <PadsContext.Provider value={{ bpm, setBpm }}>
      <MainContainer>
        <Top />
        <DrumMachine />
      </MainContainer>
    </PadsContext.Provider>
  );
};

export default App;
