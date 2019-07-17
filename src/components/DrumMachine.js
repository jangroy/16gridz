import React, { useRef } from "react";
import DrumPad from "./DrumPad";
import styled from "styled-components";
import { data } from "../data";

const PadsWrapper = styled.div`
  max-width: 500px;
  max-height: 500px;
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

  return (
    <PadsWrapper ref={padRef}>
      {data.map((pad, idx) => {
        return <DrumPad key={idx} hotkey={pad.hotkey} uri={pad.uri} id={idx} />;
      })}
    </PadsWrapper>
  );
};

export default DrumMachine;
