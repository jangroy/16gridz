import React, { useState, useEffect, useRef } from "react";
import { useAudio } from "./Audio";
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

const PadStyle = styled.div`
  background: ${props => (props.assigned ? "greenyellow" : "white")};
  border-radius: 3px;
  border: 1px solid transparent;
  box-shadow: 5 5 20px grey;
  transition: 0.05s ease;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  user-select: none;
  box-shadow: 0 0 10px transparent;
  :focus {
    outline: none;
  }
  :active {
    background: greenyellow;
    box-shadow: 0 0 10px greenyellow;
    /* box-shadow: 5px 5px 10px greenyellow; */
  }
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
    uri: `${process.env.PUBLIC_URL}/audio/trap/Trap Ghosts Hats/JJ - Hat 1.wav`
  },
  "3",
  "4",
  "Q",
  "W",
  "E",
  "R",
  "A",
  "S",
  "D",
  "F",
  "Z",
  "X",
  "C",
  "V"
];

const DrumPad = props => {
  const [assigned, setAssigned] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [playing, toggle, audioPlay] = useAudio(props.uri);

  const hotkeyPress = id => {
    console.log("hotkeypressed");
    audioPlay();
  };
  console.log(props);

  return (
    <PadStyle
      assigned={false}
      onKeyDown={() => hotkeyPress(props.id)}
      onMouseDown={() => {
        audioPlay();
      }}
    >
      {props.hotkey}
    </PadStyle>
  );
};

const DrumMachine = props => {
  let padRef = useRef();
  useEffect(() => {
    padRef.current.focus();
  }, []);
  useEffect(() => {
    document.body.addEventListener("keydown", e => {
      console.log(e.key);
    });
    return function cleanup() {
      document.body.removeEventListener("keydown");
    };
  }, []);

  return (
    <PadsWrapper ref={padRef}>
      {data.map((pad, idx) => {
        return <DrumPad key={idx} hotkey={pad.hotkey} uri={pad.uri} id={idx} />;
      })}
    </PadsWrapper>
  );
};

export default DrumMachine;
