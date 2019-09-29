import { useState } from "react";

export const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  audio.volume = 0.5;

  const toggle = () => setPlaying(!playing);
  const play = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    setPlaying(true);
    setTimeout(() => {
      setPlaying(false);
    }, 80);
    // ended callback
    // audio.onended = () => {
    //   setPlaying(false);
    // };
  };

  return [playing, play];
};
