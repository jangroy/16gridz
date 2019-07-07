import React from "react";
import styled from "styled-components";

const Controller = styled.div`
  width: 500px;
  height: 500px;
  padding: 15px;
  background: grey;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  box-sizing: border-box;
`;

const Pad = styled.div`
  background: white;
`;

// 16 pads
const MaschinePads = [];

// 64 pads
const PushPads = [];

const Pads = props => {
  return (
    <Controller>
      {AllPads.map(pad => {
        return <Pad />;
      })}
    </Controller>
  );
};

export default Pads;
