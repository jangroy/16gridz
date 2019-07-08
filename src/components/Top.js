import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PadsContext from "../context";

const TopWrapper = styled.div`
  width: 100%;
  height: 100px;
`;
const BPM = styled.div``;
const BPMInput = styled.input`
  width: 100px;
`;

// const validateBPM = input => {
//   if (isNaN(input)) {
//   } else {
//     return true;
//   }
// };

const Top = props => {
  const ctx = useContext(PadsContext);

  const changeBPM = e => {
    console.log(e.target.value);
    let inputValue = e.target.value;

    if (!isNaN(inputValue)) {
      ctx.setBpm(inputValue || "");
    }
  };

  return (
    <TopWrapper>
      <BPM>{ctx.bpm} BPM</BPM>
      <BPMInput
        type="text"
        onChange={changeBPM}
        value={ctx.bpm}
        onBlur={changeBPM}
      />
    </TopWrapper>
  );
};

export default Top;
