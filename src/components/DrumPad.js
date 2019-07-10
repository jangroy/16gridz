import React, { useState, useEffect } from "react";
import { useAudio } from "./Audio";
import styled from "styled-components";

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

const DrumPad = props => {
  const [assigned, setAssigned] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [playing, toggle, audioPlay] = useAudio(props.uri);

  useEffect(() => {
    window.addEventListener("keydown", hotkeyPress);
    return function cleanup() {
      window.removeEventListener("keydown", hotkeyPress);
    };
  }, []);

  const hotkeyPress = e => {
    if (e.key === props.hotkey.toLowerCase()) {
      audioPlay();
    }
  };

  return (
    <PadStyle
      assigned={false}
      onMouseDown={() => {
        audioPlay();
      }}
    >
      {props.hotkey}
    </PadStyle>
  );
};

export default DrumPad;
