import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const out = join(root, "public/audio/gumbo-retro-loop.wav");
const sampleRate = 44100;
const duration = 37;
const samples = sampleRate * duration;
const channels = 2;
const bytesPerSample = 2;
const dataSize = samples * channels * bytesPerSample;
const buffer = Buffer.alloc(44 + dataSize);

const writeString = (offset, value) => buffer.write(value, offset, "ascii");
writeString(0, "RIFF");
buffer.writeUInt32LE(36 + dataSize, 4);
writeString(8, "WAVE");
writeString(12, "fmt ");
buffer.writeUInt32LE(16, 16);
buffer.writeUInt16LE(1, 20);
buffer.writeUInt16LE(channels, 22);
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(sampleRate * channels * bytesPerSample, 28);
buffer.writeUInt16LE(channels * bytesPerSample, 32);
buffer.writeUInt16LE(bytesPerSample * 8, 34);
writeString(36, "data");
buffer.writeUInt32LE(dataSize, 40);

const note = (freq, t, phase = 0) => Math.sin(2 * Math.PI * freq * t + phase);
const kick = (t, beat) => {
  const x = t - beat;
  if (x < 0 || x > 0.16) return 0;
  return Math.sin(2 * Math.PI * (78 - x * 180) * x) * Math.exp(-x * 19);
};
const hat = (t, beat) => {
  const x = t - beat;
  if (x < 0 || x > 0.035) return 0;
  const noise = Math.sin((t * 12731) % 1) * 2 - 1;
  return noise * Math.exp(-x * 80);
};

const bpm = 104;
const beatDur = 60 / bpm;
const bass = [55, 65.41, 73.42, 49];

for (let i = 0; i < samples; i++) {
  const t = i / sampleRate;
  const beatIndex = Math.floor(t / beatDur);
  const barBeat = beatIndex % 8;
  const bassFreq = bass[Math.floor(beatIndex / 2) % bass.length];
  const gate = (t % beatDur) < beatDur * 0.62 ? 1 : 0.35;
  let sample =
    note(bassFreq, t) * 0.22 * gate +
    note(bassFreq * 2, t, 0.4) * 0.07 * gate +
    note(220 + (barBeat % 4) * 55, t) * 0.045;

  for (let b = -1; b < duration / beatDur + 1; b++) {
    const bt = b * beatDur;
    if (b % 2 === 0) sample += kick(t, bt) * 0.55;
    sample += hat(t, bt + beatDur * 0.5) * 0.08;
  }

  const fadeIn = Math.min(1, t / 1);
  const fadeOut = Math.min(1, (duration - t) / 2);
  const amp = Math.max(-1, Math.min(1, sample * fadeIn * fadeOut * 0.42));
  const left = Math.round(amp * 32767);
  const right = Math.round(amp * 0.94 * 32767);
  const offset = 44 + i * channels * bytesPerSample;
  buffer.writeInt16LE(left, offset);
  buffer.writeInt16LE(right, offset + 2);
}

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, buffer);
console.log(out);
