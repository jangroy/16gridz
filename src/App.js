import React, { useState, useEffect } from "react";
import DrumMachine from "./components/DrumMachine";
import Transport from "./components/Transport";
import Tone from "tone";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import theme from "styled-theming";
import { FirebaseContext } from "./context.js";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import { firebaseConfig } from "./config/firebaseconfig";

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
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [bpm, setBpm] = useState(120);
  const [firebaseInit, setFirebaseInit] = useState();
  const [ui, setUi] = useState();
  const [uiConfig, setUiConfig] = useState();

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    setFirebaseInit(true);
  }, []);

  useEffect(() => {
    if (firebaseInit) {
      // Initialize the FirebaseUI Widget using Firebase.
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      setUi(ui);
      // The start method will wait until the DOM is loaded.
      const uiConfig = {
        signInSuccessUrl: "http://localhost:3000",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        // tosUrl: "<your-tos-url>",
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign("http://localhost:3000");
        }
      };
      setUiConfig(uiConfig);
    }
  }, [firebaseInit]);

  return (
    <FirebaseContext.Provider value={{ ui, uiConfig }}>
      <PageContainer>
        <Header />
        <Body>
          {/* <Sidebar /> */}
          {/* <Transport /> */}
          <DrumMachine />
        </Body>
      </PageContainer>
    </FirebaseContext.Provider>
  );
};

export default App;
