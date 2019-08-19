import * as WebMidi from "webmidi";

export const enableWebMidi = () => {
  WebMidi.enable(() => {
    let inputs = WebMidi.inputs;
    let outputs = WebMidi.outputs;
  });
};
