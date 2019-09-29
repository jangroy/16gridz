import React, { useRef, useContext } from "react";
import DrumPad from "./DrumPad";
import styled from "styled-components";
import { data } from "../data";
import { COLORS } from "../styles/global/variables/padColors";
import { GlobalContext } from "../context";
import { device } from "../styles/global/variables/sizes";

const DrumMachineWrapper = styled.div`
  background: lightblue;
  height: 100%;
  width: 100%;
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// work on proper responsive grids
const StyledDrumMachine = styled.div`
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  display: grid;
  background: #404040;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3%;
  padding: 15px;
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
    <DrumMachineWrapper>
      <StyledDrumMachine ref={padRef}>
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
      </StyledDrumMachine>
    </DrumMachineWrapper>
  );
};

export default DrumMachine;
