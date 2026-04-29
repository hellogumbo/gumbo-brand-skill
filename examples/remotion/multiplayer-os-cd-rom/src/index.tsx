import { Composition, registerRoot } from "remotion";

import { MultiplayerOSVideo } from "./MultiplayerOSVideo";
import { FPS, HEIGHT, TOTAL_FRAMES, WIDTH } from "./video-spec";

export const RemotionRoot = () => (
  <Composition
    component={MultiplayerOSVideo}
    durationInFrames={TOTAL_FRAMES}
    fps={FPS}
    height={HEIGHT}
    id="multiplayer-os-video"
    width={WIDTH}
  />
);

registerRoot(RemotionRoot);
