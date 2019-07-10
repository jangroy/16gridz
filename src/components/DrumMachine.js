import React, { useState, useEffect, useRef } from "react";
import DrumPad from "./DrumPad";
import styled from "styled-components";

const PadsWrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 15px;
  background: #404040;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  box-sizing: border-box;
`;

// hotkeys
let data = [
  {
    hotkey: "1",
    name: "JJ - Kick1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
  },
  {
    hotkey: "2",
    name: "JJ - Hat 1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Hats/JJ - Hihat 10.wav`
  },
  {
    hotkey: "3",
    name: "",
    uri: `${
      process.env.PUBLIC_URL
    }audio/trap/Trap Ghosts Snares/JJ - Snare1.wav`
  },
  {
    hotkey: "4",
    name: "JJ - Kick1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick2.wav`
  },
  {
    hotkey: "Q",
    name: "JJ - Kick1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
  },
  {
    hotkey: "W",
    name: "JJ - Hat 1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Hats/JJ - Hihat 10.wav`
  },
  {
    hotkey: "E",
    name: "",
    uri: `${
      process.env.PUBLIC_URL
    }audio/trap/Trap Ghosts Snares/JJ - Snare1.wav`
  },
  {
    hotkey: "R",
    name: "JJ - Kick1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
  },
  {
    hotkey: "A",
    name: "JJ - Kick1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
  },
  {
    hotkey: "S",
    name: "JJ - Hat 1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Hats/JJ - Hihat 10.wav`
  },
  {
    hotkey: "D",
    name: "",
    uri: `${
      process.env.PUBLIC_URL
    }audio/trap/Trap Ghosts Snares/JJ - Snare1.wav`
  },
  {
    hotkey: "F",
    name: "JJ - Kick1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
  },
  {
    hotkey: "Z",
    name: "JJ - Kick1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
  },
  {
    hotkey: "X",
    name: "JJ - Hat 1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Hats/JJ - Hihat 10.wav`
  },
  {
    hotkey: "C",
    name: "",
    uri: `${
      process.env.PUBLIC_URL
    }audio/trap/Trap Ghosts Snares/JJ - Snare1.wav`
  },
  {
    hotkey: "V",
    name: "JJ - Kick1",
    uri: `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
  }
];

const DrumMachine = props => {
  let padRef = useRef();

  return (
    <PadsWrapper ref={padRef}>
      {data.map((pad, idx) => {
        return <DrumPad key={idx} hotkey={pad.hotkey} uri={pad.uri} id={idx} />;
      })}
    </PadsWrapper>
  );
};

export default DrumMachine;
