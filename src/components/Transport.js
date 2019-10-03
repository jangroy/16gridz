import React, { useEffect } from "react";
import Tone from "tone";
import * as WebMidi from "webmidi";
import { useAudio } from "../hooks/audio";

const Transport = () => {
  const [playing, audioPlay] = useAudio(
    process.env.PUBLIC_URL +
      "/audio/trap/Trap Ghosts Kicks & 808/JJ - Kick1.wav"
  );
  let note;

  WebMidi.enable(() => {
    let grand = WebMidi.getInputByName("SL GRAND MIDI 1");

    grand.addListener("noteon", "all", function(e) {
      note = e.note.name + e.note.octave;
      console.log("note", note);
      audioPlay();
    });
  });

  var synthA = new Tone.Synth({
    oscillator: {
      type: "fmsquare",
      modulationType: "sawtooth",
      modulationIndex: 3,
      harmonicity: 3.4
    },
    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1
    }
  }).toMaster();

  return (
    <>
      <button onClick={() => audioPlay()}>stop</button>
    </>
  );
};

export default Transport;
