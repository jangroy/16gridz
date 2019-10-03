import * as WebMidi from "webmidi";

// webmidi readme
//https://github.com/djipco/webmidi

// webmidi api
//http://djipco.github.io/webmidi/latest/classes/Input.html#event_noteon
export const enableWebMidi = () => {
  let note;

  WebMidi.enable(() => {
    let grand = WebMidi.getInputByName("SL GRAND MIDI 1");
    let inputs = WebMidi.inputs;

    inputs.forEach(input => console.log("input", input.name));
    grand.addListener("noteon", "all", function(e) {
      note = e.note.name + e.note.octave;
    });
  });
};
