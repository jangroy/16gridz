import React, { useState, useEffect } from "react";
import { useAudio } from "./Audio";
import styled from "styled-components";

const PadsWrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 15px;
  background: grey;
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
  :active {
    background: greenyellow;
    box-shadow: 0 0 10px greenyellow;
    /* box-shadow: 5px 5px 10px green; */
  }
`;

const ControllablePad = props => {
  const [assigned, setAssigned] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [playing, toggle, play] = useAudio(
    `${
      process.env.PUBLIC_URL
    }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
  );

  useEffect(() => {
    // console.log("pad props", props);
  }, []);
  return (
    <PadStyle
      assigned={false}
      onClick={() => {
        console.log(`clicked Pad #${props.id + 1}`);
        play();
      }}
    />
  );
};

// 16 pads
const MaschinePads = Array.from(Array(16));

// 64 pads
const PushPads = Array.from(Array(64));

const Pads = props => {
  return (
    <PadsWrapper>
      {MaschinePads.map((pad, idx) => {
        return <ControllablePad key={idx} id={idx} />;
      })}
    </PadsWrapper>
  );
};

export default Pads;
