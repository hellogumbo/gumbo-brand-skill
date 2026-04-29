export const WIDTH = 1080;
export const HEIGHT = 700;
export const FPS = 30;
export const TOTAL_FRAMES = 1110;

export const SCENES = [
  { name: "CD-ROM Boot", frames: 120 },
  { name: "Product Insert", frames: 145 },
  { name: "Shared Brain", frames: 140 },
  { name: "Agent Roles", frames: 140 },
  { name: "Permission Gates", frames: 135 },
  { name: "Ingestion Loop", frames: 140 },
  { name: "Operating Layers", frames: 150 },
  { name: "CTA", frames: 140 },
] as const;

export const sceneStart = (index: number) =>
  SCENES.slice(0, index).reduce((total, scene) => total + scene.frames, 0);

export const palette = {
  bg: "#060a12",
  surface: "#0b1324",
  surface2: "#101a30",
  blue: "#2563eb",
  blueBright: "#3b82f6",
  blueDark: "#1e3a8a",
  white: "#ffffff",
  muted: "#9db7d9",
  dim: "#587295",
  black: "#111111",
  cayenne: "#d65c73",
  okra: "#6a9d62",
  pine: "#38573e",
  orange: "#f97316",
  border: "rgba(255,255,255,0.18)",
};
