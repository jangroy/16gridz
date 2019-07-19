import React, { useEffect } from "react";
import Tone from "tone";

const Transport = () => {
  useEffect(() => {}, []);

  const audio = new Tone.Player(
    {
      url: `${
        process.env.PUBLIC_URL
      }/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav`
    },
    () => {
      console.log("loaded");
    }
  );
  audio.toMaster();

  const play = () => {
    audio.start();
  };

  return <button onClick={play}>play</button>;
};

export default Transport;
