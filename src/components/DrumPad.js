import React, { useState, useEffect, useContext } from "react";
import { useAudio } from "./Audio";
import styled from "styled-components";
import { GlobalContext } from "../context";

const StyledPad = styled.div`
  background: ${props => (props.assigned ? props.color : "white")};
  background-image: ${props =>
    props.assigned && props.playing
      ? `radial-gradient(
      circle,
      rgba(255, 255, 255, 0.6),
      transparent
      )`
      : "white"};
  box-shadow: 0 0 10px
    ${props => (props.assigned && props.playing ? "white" : "transparent")};
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
  const context = useContext(GlobalContext);

  // console.log("props", props);

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
        context.setCurrentPadId(props.id);
      }}
      onMouseDown={e => {
        audioPlay();
        context.setCurrentPadId(props.id);
      }}
      onTouchEnd={e => e.preventDefault()}
    >
      <StyledKPadKey>{props.hotkey}</StyledKPadKey>
    </StyledPad>
  );
};

export default DrumPad;
