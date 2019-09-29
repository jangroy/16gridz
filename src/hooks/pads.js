import { useState, useEffect } from "react";

export const useLongPress = (callback = () => {}, ms = 300) => {
  const [longPress, setLongPress] = useState(false);

  useEffect(() => {
    let timer;
    if (longPress) {
      timer = setTimeout(callback, ms);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [longPress]);

  return {
    setLongPress
  };
};
