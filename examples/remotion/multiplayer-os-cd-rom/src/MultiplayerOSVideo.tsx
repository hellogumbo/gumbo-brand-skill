import type { CSSProperties, ReactNode } from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { FPS, SCENES, TOTAL_FRAMES, palette, sceneStart } from "./video-spec";

const wordmark = staticFile("brand/wordmark-white.svg");
const symbol = staticFile("brand/icon.svg");
const cdRom = staticFile("brand/multiplayer-os-cd-rom.png");
const halftone = staticFile("brand/team-computers-blue-halftone.jpg");
const audio = staticFile("audio/gumbo-retro-loop.wav");

const fontBody =
  '"Inter", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';
const fontDisplay =
  '"Space Grotesk", "Inter", "Helvetica Neue", Arial, sans-serif';
const fontMono =
  '"SF Mono", "IBM Plex Mono", Menlo, Consolas, monospace';

export const MultiplayerOSVideo = () => (
  <AbsoluteFill style={{ background: palette.bg }}>
    <BackgroundAudio />
    {SCENES.map((scene, index) => (
      <Sequence
        durationInFrames={scene.frames}
        from={sceneStart(index)}
        key={scene.name}
      >
        {index === 0 && <CdRomBoot duration={scene.frames} />}
        {index === 1 && <ProductInsert duration={scene.frames} />}
        {index === 2 && <SharedBrain duration={scene.frames} />}
        {index === 3 && <AgentRoles duration={scene.frames} />}
        {index === 4 && <PermissionGates duration={scene.frames} />}
        {index === 5 && <IngestionLoop duration={scene.frames} />}
        {index === 6 && <OperatingLayers duration={scene.frames} />}
        {index === 7 && <FinalCta duration={scene.frames} />}
      </Sequence>
    ))}
  </AbsoluteFill>
);

const BackgroundAudio = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, FPS], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [TOTAL_FRAMES - FPS * 2, TOTAL_FRAMES], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return <Audio src={audio} volume={0.4 * fadeIn * fadeOut} />;
};

const CdRomBoot = ({ duration }: SceneProps) => {
  const frame = useCurrentFrame();
  const typed = "mount /Volumes/GUMBO_MULTIPLAYER_OS".slice(
    0,
    Math.floor(frame / 1.45),
  );
  const lines = [
    "Gumbo Multiplayer OS v1",
    "loading company brain: wiki/",
    "runtime: Hermes profiles mounted",
    "permissions.yaml: enforced",
    "agents: router, operator, ingest, delivery, specialist",
    "opening control plane...",
  ];

  return (
    <Scene label="GUMBO CD-ROM // BOOT" duration={duration}>
      <div style={splitGrid}>
        <div>
          <Img src={wordmark} style={{ width: 260, marginBottom: 20 }} />
          <Label>CD-ROM system loader</Label>
          <div style={terminalLine}>
            <span style={{ color: palette.okra }}>$</span> {typed}
            <span style={{ opacity: frame % 18 < 9 ? 1 : 0 }}>_</span>
          </div>
          <div style={terminalBox}>
            {lines.map((line, index) => {
              const p = progress(frame, 38 + index * 8, 9);
              return (
                <div
                  key={line}
                  style={{
                    opacity: p,
                    transform: `translateY(${(1 - p) * 10}px)`,
                    color: index === 0 ? palette.blueBright : palette.muted,
                    fontFamily: fontMono,
                    fontSize: index === 0 ? 23 : 15,
                    marginBottom: 13,
                  }}
                >
                  {index === 0 ? ">> " : "ok "} {line}
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Disc delay={10} />
          <div
            style={{
              position: "absolute",
              right: 42,
              top: 78,
              width: 210,
              height: 210,
              border: `2px solid ${palette.blue}`,
              transform: `rotate(${frame * 0.34}deg)`,
              opacity: 0.78,
            }}
          />
          <Img
            src={symbol}
            style={{
              position: "absolute",
              right: 86,
              top: 122,
              width: 122,
              height: 122,
              filter: "drop-shadow(0 0 26px rgba(37,99,235,0.55))",
            }}
          />
        </div>
      </div>
    </Scene>
  );
};

const ProductInsert = ({ duration }: SceneProps) => {
  const frame = useCurrentFrame();
  const lift = useSpring(4);
  const rows = [
    ["Wiki-backed memory", palette.blue],
    ["Hermes runtime", palette.okra],
    ["Approval gates", palette.cayenne],
    ["Durable decisions", palette.orange],
  ] as const;

  return (
    <Scene label="PRODUCT INSERT" duration={duration}>
      <div
        style={{
          position: "absolute",
          inset: 28,
          display: "grid",
          gridTemplateColumns: "1fr 0.72fr",
          gap: 24,
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Img
            src={cdRom}
            style={{
              position: "absolute",
              width: 716,
              left: -52,
              top: -28,
              transform: `translateY(${(1 - lift) * 44}px) scale(${
                0.96 + lift * 0.04
              })`,
              filter: "drop-shadow(0 28px 38px rgba(0,0,0,0.36))",
            }}
          />
        </div>
        <div style={{ paddingTop: 60 }}>
          <Label>Old school shell. Modern operating loop.</Label>
          <BigTitle style={{ marginTop: 14, fontSize: 48 }}>
            Multiplayer OS
          </BigTitle>
          <p style={leadText}>
            Shared context, role-scoped agents, ingestion, permissions, and
            governance in one repo.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
            {rows.map(([label, color], index) => (
              <Pill
                color={color}
                key={label}
                style={{
                  opacity: progress(frame, 44 + index * 8, 12),
                  transform: `translateY(${
                    (1 - progress(frame, 44 + index * 8, 12)) * 12
                  }px)`,
                }}
              >
                {label}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </Scene>
  );
};

const SharedBrain = ({ duration }: SceneProps) => {
  const frame = useCurrentFrame();
  const pages = [
    ["wiki/projects/Gumbo.md", "company thesis"],
    ["wiki/systems/Gumbo Multiplayer OS.md", "operating model"],
    ["wiki/decisions/", "durable decisions"],
    ["wiki/_meta/log.md", "review trail"],
  ];

  return (
    <Scene label="SHARED BRAIN" duration={duration}>
      <div style={splitGrid}>
        <div>
          <Label>Source of truth</Label>
          <BigTitle style={{ marginTop: 18 }}>
            The company brain is inspectable.
          </BigTitle>
          <p style={leadText}>
            Agents work from the same Git-backed wiki humans can read, review,
            and correct.
          </p>
        </div>
        <div style={{ display: "grid", gap: 12, alignContent: "center" }}>
          {pages.map(([path, note], index) => {
            const p = progress(frame, 16 + index * 13, 12);
            return (
              <FileCard
                key={path}
                note={note}
                path={path}
                style={{
                  opacity: p,
                  transform: `translateX(${(1 - p) * 34}px)`,
                }}
              />
            );
          })}
        </div>
      </div>
    </Scene>
  );
};

const AgentRoles = ({ duration }: SceneProps) => {
  const frame = useCurrentFrame();
  const roles = [
    ["Router", "triage + handoff", palette.blue],
    ["Operator Wiki", "durable writeback", palette.okra],
    ["Meeting Ingest", "source to summary", palette.orange],
    ["Delivery Ops", "project visibility", palette.cayenne],
    ["Specialist", "bounded expertise", palette.pine],
  ] as const;

  return (
    <Scene label="ROLE-SCOPED AGENTS" duration={duration}>
      <div style={{ position: "absolute", inset: 44 }}>
        <Label>Replaceable workers. Shared operating language.</Label>
        <div style={{ position: "absolute", left: 52, top: 122 }}>
          <Img src={symbol} style={{ width: 152, height: 152 }} />
          <div style={{ fontFamily: fontMono, color: palette.muted, marginTop: 10 }}>
            HERMES PROFILES
          </div>
        </div>
        <svg
          style={{ position: "absolute", inset: 0, opacity: 0.48 }}
          viewBox="0 0 900 520"
        >
          {roles.map((_, index) => {
            const angle = (Math.PI * 2 * index) / roles.length - Math.PI / 2;
            const x = 560 + Math.cos(angle) * 245;
            const y = 250 + Math.sin(angle) * 148;
            return (
              <line
                key={index}
                stroke={palette.blue}
                strokeDasharray="6 8"
                strokeWidth="2"
                x1="126"
                x2={x}
                y1="154"
                y2={y}
              />
            );
          })}
        </svg>
        {roles.map(([role, note, color], index) => {
          const angle = (Math.PI * 2 * index) / roles.length - Math.PI / 2;
          const p = useSpring(18 + index * 7);
          const x = 500 + Math.cos(angle) * 250 * p;
          const y = 232 + Math.sin(angle) * 150 * p;
          return (
            <div
              key={role}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: 210,
                border: `1px solid ${color}`,
                background: `${color}24`,
                padding: 16,
                transform: `scale(${0.88 + p * 0.12})`,
              }}
            >
              <div style={roleTitle}>{role}</div>
              <div style={roleNote}>{note}</div>
            </div>
          );
        })}
      </div>
    </Scene>
  );
};

const PermissionGates = ({ duration }: SceneProps) => {
  const frame = useCurrentFrame();
  const rows = [
    ["wiki/", "read", "agent-safe"],
    ["wiki/decisions/", "write", "operator only"],
    ["external messages", "draft", "approval required"],
    ["secrets", "deny", "always blocked"],
    ["production deploys", "gate", "human review"],
  ];

  return (
    <Scene label="PERMISSIONS.YAML" duration={duration}>
      <div style={{ position: "absolute", inset: 52 }}>
        <Label color={palette.cayenne}>Governance layer</Label>
        <BigTitle style={{ marginTop: 14, fontSize: 50 }}>
          Risk is explicit before action.
        </BigTitle>
        <div style={{ marginTop: 28, border: `1px solid ${palette.border}` }}>
          {rows.map(([scope, mode, rule], index) => {
            const p = progress(frame, 18 + index * 10, 9);
            return (
              <div
                key={scope}
                style={{
                  opacity: p,
                  display: "grid",
                  gridTemplateColumns: "1.1fr 0.45fr 1fr",
                  borderTop: index === 0 ? "none" : `1px solid ${palette.border}`,
                  padding: "18px 20px",
                  color: palette.white,
                  fontFamily: fontMono,
                  fontSize: 18,
                  background:
                    index % 2 ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.015)",
                }}
              >
                <span>{scope}</span>
                <span style={{ color: mode === "deny" ? palette.cayenne : palette.blueBright }}>
                  {mode}
                </span>
                <span style={{ color: palette.muted }}>{rule}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Scene>
  );
};

const IngestionLoop = ({ duration }: SceneProps) => {
  const frame = useCurrentFrame();
  const steps = ["meeting", "summary", "wiki page", "decision", "log entry"];
  const lineProgress = progress(frame, 16, 95);

  return (
    <Scene label="INGESTION LOOP" duration={duration}>
      <div style={{ position: "absolute", inset: 48 }}>
        <Label>Do not dump transcripts. Promote knowledge.</Label>
        <div
          style={{
            position: "absolute",
            left: 72,
            right: 72,
            top: 235,
            height: 2,
            background: `linear-gradient(90deg, ${palette.blue} ${
              lineProgress * 100
            }%, rgba(255,255,255,0.16) ${lineProgress * 100}%)`,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 118,
          }}
        >
          {steps.map((step, index) => {
            const p = progress(frame, 18 + index * 16, 12);
            return (
              <div key={step} style={{ width: 156, textAlign: "center", opacity: p }}>
                <div style={stepBadge(index, lineProgress)}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div style={stepLabel}>{step}</div>
              </div>
            );
          })}
        </div>
        <div style={bottomStatement}>
          Repeated corrections become pages, templates, skills, scripts, or policy.
        </div>
      </div>
    </Scene>
  );
};

const OperatingLayers = ({ duration }: SceneProps) => {
  const layers = [
    ["Experience", "humans inspect and correct", "#10213a"],
    ["Governance", "permissions, logs, review", "#163b2c"],
    ["Ingestion", "source material becomes durable knowledge", "#5b2734"],
    ["Runtime", "Hermes profiles and tool access", "#3d2e16"],
    ["Durable Brain", "wiki as canonical memory", "#0b1324"],
  ] as const;

  return (
    <Scene label="OPERATING LAYERS" duration={duration}>
      <div
        style={{
          position: "absolute",
          inset: 44,
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 38,
        }}
      >
        <div style={{ paddingTop: 54 }}>
          <Label>Company AI OS stack</Label>
          <BigTitle style={{ marginTop: 16, fontSize: 54 }}>
            The repo becomes the operating surface.
          </BigTitle>
        </div>
        <div style={{ position: "relative", marginTop: 42 }}>
          {layers.map(([name, note, color], index) => {
            const p = useSpring(14 + index * 9);
            return (
              <div
                key={name}
                style={{
                  position: "absolute",
                  left: index * 20,
                  top: 332 - index * 64,
                  width: 520 - index * 34,
                  height: 58,
                  border: `1px solid ${palette.border}`,
                  background: color,
                  opacity: p,
                  transform: `translateY(${(1 - p) * 24}px) skewX(-14deg)`,
                  padding: "9px 18px",
                }}
              >
                <div style={{ transform: "skewX(14deg)", ...layerTitle }}>
                  {name}
                </div>
                <div style={{ transform: "skewX(14deg)", ...layerNote }}>
                  {note}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Scene>
  );
};

const FinalCta = ({ duration }: SceneProps) => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 8) * 0.018;

  return (
    <Scene label="GUMBO MULTIPLAYER OS" duration={duration}>
      <div
        style={{
          position: "absolute",
          inset: 42,
          display: "grid",
          placeItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Img
            src={wordmark}
            style={{ width: 410, transform: `scale(${pulse})` }}
          />
          <BigTitle style={{ marginTop: 28, fontSize: 62 }}>Multiplayer OS</BigTitle>
          <div style={ctaSubhead}>
            Make the company brain operational for humans and agents.
          </div>
          <div style={repoCard}>
            <Img src={symbol} style={{ width: 42, height: 42 }} />
            hellogumbo/gumbo-multiplayer-os
          </div>
        </div>
      </div>
    </Scene>
  );
};

type SceneProps = {
  duration: number;
};

const Scene = ({
  children,
  duration,
  label,
}: {
  children: ReactNode;
  duration: number;
  label: string;
}) => {
  const frame = useCurrentFrame();
  const enterValue = useSpring(0);
  const fadeOut = interpolate(frame, [duration - 16, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scaleOut = interpolate(frame, [duration - 20, duration], [1, 0.965], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 18% 15%, rgba(37,99,235,0.22), transparent 34%), radial-gradient(circle at 82% 20%, rgba(214,92,115,0.12), transparent 30%), #060a12",
        color: palette.white,
        fontFamily: fontBody,
        overflow: "hidden",
        opacity: fadeOut,
      }}
    >
      <Img
        src={halftone}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.12,
          filter: "saturate(1.3) contrast(1.2)",
        }}
      />
      <RetroGrid />
      <Scanlines />
      <div
        style={{
          position: "absolute",
          inset: 36,
          border: `1px solid ${palette.border}`,
          borderRadius: 10,
          background:
            "linear-gradient(180deg, rgba(11,19,36,0.98), rgba(6,10,18,0.96))",
          boxShadow:
            "0 36px 80px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.08)",
          overflow: "hidden",
          transform: `scale(${(0.95 + enterValue * 0.05) * scaleOut})`,
        }}
      >
        <Chrome label={label} />
        <div style={{ position: "absolute", inset: "40px 0 0" }}>{children}</div>
      </div>
    </AbsoluteFill>
  );
};

const Chrome = ({ label }: { label: string }) => (
  <div
    style={{
      height: 40,
      borderBottom: `1px solid ${palette.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 18px",
      color: palette.muted,
      fontFamily: fontMono,
      fontSize: 13,
      background: "rgba(255,255,255,0.03)",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {["#ff5f56", "#ffbd2e", "#27c93f"].map((color) => (
        <span
          key={color}
          style={{
            width: 10,
            height: 10,
            background: color,
            borderRadius: 999,
            display: "block",
          }}
        />
      ))}
    </div>
    <div>{label}</div>
    <Img src={symbol} style={{ width: 25, height: 25 }} />
  </div>
);

const Disc = ({ delay }: { delay: number }) => {
  const frame = useCurrentFrame();
  const p = useSpring(delay);
  return (
    <div
      style={{
        position: "absolute",
        right: 4,
        top: 42,
        width: 310,
        height: 310,
        borderRadius: "50%",
        border: `2px solid ${palette.border}`,
        background:
          "radial-gradient(circle at center, #060a12 0 14%, transparent 15%), conic-gradient(from 0deg, #0b1324, #2563eb, #111111, #d65c73, #2563eb, #0b1324)",
        transform: `scale(${0.84 + p * 0.16}) rotate(${frame * 1.2}deg)`,
        boxShadow:
          "inset 0 0 34px rgba(255,255,255,0.18), 0 26px 40px rgba(0,0,0,0.3)",
      }}
    />
  );
};

const RetroGrid = () => (
  <AbsoluteFill
    style={{
      opacity: 0.2,
      backgroundImage:
        "linear-gradient(rgba(37,99,235,0.32) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.32) 1px, transparent 1px)",
      backgroundSize: "36px 36px",
      transform: "perspective(700px) rotateX(58deg) translateY(210px)",
      transformOrigin: "50% 100%",
    }}
  />
);

const Scanlines = () => (
  <AbsoluteFill
    style={{
      pointerEvents: "none",
      opacity: 0.18,
      background:
        "repeating-linear-gradient(180deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)",
      mixBlendMode: "screen",
    }}
  />
);

const Label = ({
  children,
  color = palette.blueBright,
}: {
  children: ReactNode;
  color?: string;
}) => (
  <div
    style={{
      color,
      fontFamily: fontMono,
      fontSize: 14,
      textTransform: "uppercase",
    }}
  >
    {children}
  </div>
);

const BigTitle = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <div
    style={{
      color: palette.white,
      fontFamily: fontDisplay,
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 0.98,
      textTransform: "uppercase",
      ...style,
    }}
  >
    {children}
  </div>
);

const Pill = ({
  children,
  color,
  style,
}: {
  children: ReactNode;
  color: string;
  style?: CSSProperties;
}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      border: `1px solid ${color}`,
      background: `${color}22`,
      color: palette.white,
      padding: "7px 10px",
      borderRadius: 4,
      fontFamily: fontMono,
      fontSize: 13,
      ...style,
    }}
  >
    <span style={{ width: 8, height: 8, background: color, borderRadius: 99 }} />
    {children}
  </div>
);

const FileCard = ({
  note,
  path,
  style,
}: {
  note: string;
  path: string;
  style?: CSSProperties;
}) => (
  <div
    style={{
      border: `1px solid ${palette.border}`,
      background: "rgba(255,255,255,0.045)",
      padding: 18,
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "center",
      ...style,
    }}
  >
    <span style={{ fontFamily: fontMono, color: palette.white, fontSize: 18 }}>
      {path}
    </span>
    <span style={{ color: palette.blueBright, fontFamily: fontMono, fontSize: 13 }}>
      {note}
    </span>
  </div>
);

const useSpring = (delay = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({
    fps,
    frame: Math.max(0, frame - delay),
    config: { damping: 18, stiffness: 140, mass: 0.8 },
  });
};

const progress = (frame: number, delay: number, duration: number) =>
  Math.max(0, Math.min(1, (frame - delay) / duration));

const splitGrid: CSSProperties = {
  position: "absolute",
  inset: 44,
  display: "grid",
  gridTemplateColumns: "0.96fr 1.04fr",
  gap: 28,
};

const terminalLine: CSSProperties = {
  marginTop: 12,
  fontFamily: fontMono,
  fontSize: 18,
  color: palette.white,
};

const terminalBox: CSSProperties = {
  marginTop: 26,
  border: `1px solid ${palette.border}`,
  background: "#050912",
  padding: 20,
  minHeight: 260,
};

const leadText: CSSProperties = {
  color: palette.muted,
  fontSize: 21,
  lineHeight: 1.34,
  marginTop: 18,
};

const roleTitle: CSSProperties = {
  color: palette.white,
  fontFamily: fontDisplay,
  fontSize: 24,
  fontWeight: 700,
};

const roleNote: CSSProperties = {
  color: palette.muted,
  fontFamily: fontMono,
  fontSize: 13,
  marginTop: 8,
};

const stepBadge = (index: number, progressValue: number): CSSProperties => ({
  width: 96,
  height: 96,
  margin: "0 auto 14px",
  border: `2px solid ${
    index / 4 <= progressValue ? palette.blue : "rgba(255,255,255,0.22)"
  }`,
  display: "grid",
  placeItems: "center",
  background: "rgba(37,99,235,0.08)",
  fontFamily: fontMono,
  fontSize: 30,
  color: palette.white,
});

const stepLabel: CSSProperties = {
  fontFamily: fontDisplay,
  fontSize: 22,
  textTransform: "uppercase",
};

const bottomStatement: CSSProperties = {
  marginTop: 82,
  color: palette.muted,
  fontSize: 26,
  fontFamily: fontDisplay,
};

const layerTitle: CSSProperties = {
  fontFamily: fontDisplay,
  fontSize: 24,
  fontWeight: 700,
};

const layerNote: CSSProperties = {
  fontFamily: fontMono,
  fontSize: 12,
  color: palette.muted,
};

const ctaSubhead: CSSProperties = {
  color: palette.muted,
  fontSize: 27,
  marginTop: 18,
  fontFamily: fontBody,
};

const repoCard: CSSProperties = {
  marginTop: 34,
  display: "inline-flex",
  alignItems: "center",
  gap: 14,
  border: `1px solid ${palette.blue}`,
  background: "rgba(37,99,235,0.13)",
  padding: "16px 22px",
  fontFamily: fontMono,
  color: palette.white,
  fontSize: 18,
};
