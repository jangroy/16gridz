import React, { useState } from "react";

export const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  const play = () => {
    // audio.pause();
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play();
  };

  //   useEffect(() => {
  //     playing ? audio.play() : audio.pause();
  //   }, [playing]);

  return [playing, toggle, play];
};
