import React, { useRef, useContext } from "react";
import DrumPad from "./DrumPad";
import styled from "styled-components";
import { data } from "../data";
import { COLORS } from "../styles/global/variables/padColors";
import { GlobalContext } from "../context";

const DrumMachineWrapper = styled.div`
  max-width: 500px;
  max-height: 50%;
  width: 100vw;
  height: 100vw;
  padding: 15px;
  background: #404040;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3%;
  box-sizing: border-box;
`;

const DrumMachine = props => {
  let padRef = useRef();
  const context = useContext(GlobalContext);
  // implement react-dnd
  const libraryItems = context.libraryItems;

  // useless
  const getRandomColor = (iterable, index) => {
    var colors = Object.keys(iterable);

    // returns random colors
    // return iterable[colors[(colors.length * Math.random()) << 0]];

    // return sequence of colors
    return iterable[colors[index % colors.length]];
  };

  return (
    <DrumMachineWrapper ref={padRef}>
      {data.map((pad, idx) => {
        return (
          <DrumPad
            color={getRandomColor(COLORS, idx)}
            key={idx}
            hotkey={pad.hotkey}
            uri={pad.uri}
            id={idx}
          />
        );
      })}
    </DrumMachineWrapper>
  );
};

export default DrumMachine;
