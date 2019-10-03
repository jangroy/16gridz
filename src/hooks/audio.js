import { useState } from "react";

export const useAudio = url => {
  const [audio] = useState(new Audio(url));
  // const [audio] = useState(
  //   new Audio(
  //     process.env.PUBLIC_URL +
  //       "/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav"
  //   )
  // );
  const [playing, setPlaying] = useState(false);

  audio.volume = 0.5;
  audio.preload = "auto";

  const toggle = () => setPlaying(!playing);
  const play = () => {
    if (audio) {
      audio.load();
      audio.currentTime = 0;
      audio.play();
    }
    setPlaying(true);
    // setTimeout(() => {
    //   setPlaying(false);
    // }, 80);
    // ended callback
    audio.onended = () => {
      setPlaying(false);
    };
  };

  return [playing, play];
};
