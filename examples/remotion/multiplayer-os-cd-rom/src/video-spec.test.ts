import { describe, expect, it } from "vitest";

import { FPS, HEIGHT, SCENES, TOTAL_FRAMES, WIDTH } from "./video-spec";

describe("Multiplayer OS CD-ROM video spec", () => {
  it("uses the requested Remotion canvas and duration", () => {
    expect(WIDTH).toBe(1080);
    expect(HEIGHT).toBe(700);
    expect(FPS).toBe(30);
    expect(TOTAL_FRAMES).toBe(1110);
  });

  it("has eight sequential scenes that add up to the full timeline", () => {
    expect(SCENES).toHaveLength(8);
    expect(SCENES.reduce((sum, scene) => sum + scene.frames, 0)).toBe(
      TOTAL_FRAMES,
    );
  });
});
