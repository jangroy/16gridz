import React, { useState, useEffect } from "react";
import { useAudio } from "./Audio";
import styled from "styled-components";

const PadStyle = styled.div`
  background: ${props => (props.assigned ? "greenyellow" : "white")};
  box-shadow: 0 0 10px ${props => (props.playing ? "white" : "transparent")};
  border-radius: 3px;
  border: 1px solid transparent;
  box-shadow: 5 5 20px grey;
  transition: 0.05s linear;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  user-select: none;
  font-size: 12px;
  /* box-shadow: 0 0 10px transparent; */
  :focus {
    outline: none;
  }
`;

const PadKeyStyle = styled.span``;

const DrumPad = props => {
  const [playing, audioPlay] = useAudio(props.uri);

  useEffect(() => {
    window.addEventListener("keydown", hotkeyPress);
    return function cleanup() {
      window.removeEventListener("keydown", hotkeyPress);
    };
  });

  const hotkeyPress = e => {
    if (props.hotkey && e.key === props.hotkey.toLowerCase()) {
      audioPlay();
    }
  };
  return (
    <PadStyle
      assigned={props.uri}
      playing={playing}
      onTouchStart={e => {
        audioPlay();
      }}
      onMouseDown={e => {
        audioPlay();
      }}
      onTouchEnd={e => e.preventDefault()}
    >
      <PadKeyStyle>{props.hotkey}</PadKeyStyle>
    </PadStyle>
  );
};

export default DrumPad;
