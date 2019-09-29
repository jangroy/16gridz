import React, { useState, useEffect, useContext } from "react";
import { useAudio } from "../hooks/audio";
import { useLongPress } from "../hooks/pads";
import styled from "styled-components";
import { GlobalContext } from "../context";

const StyledPad = styled.div`
  background: ${({ assigned, color }) => (assigned ? color : "white")};
  background-image: ${({ assigned, playing }) =>
    assigned && playing
      ? `radial-gradient(
      circle,
      rgba(255, 255, 255, 0.6),
      transparent
      )`
      : "none"};
  box-shadow: 0 0 10px
    ${({ assigned, playing }) =>
      assigned && playing ? "white" : "transparent"};
  border-radius: 3px;
  border: 1px solid transparent;
  transition: 0.05s linear;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  user-select: none;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;

const StyledKPadKey = styled.span`
  font-size: 25px;
`;

const DrumPad = props => {
  const [playing, audioPlay] = useAudio(props.uri);
  const { setLongPress } = useLongPress(() => alert("longpressed"), 500);
  const context = useContext(GlobalContext);

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
    <StyledPad
      color={props.color}
      assigned={props.uri}
      playing={playing}
      onTouchStart={e => {
        audioPlay();
        setLongPress(true);
        context.setCurrentPadId(props.id);
      }}
      onTouchEnd={e => {
        e.preventDefault();
        setLongPress(false);
      }}
      onMouseDown={e => {
        audioPlay();
        context.setCurrentPadId(props.id);
      }}
    >
      <StyledKPadKey>{props.hotkey}</StyledKPadKey>
    </StyledPad>
  );
};

export default DrumPad;
