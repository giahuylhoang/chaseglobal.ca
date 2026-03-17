"use client";

interface GlowOrbProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  duration?: number;
}

export default function GlowOrb({
  color = "rgba(255, 255, 255, 0.03)",
  size = 500,
  top = "30%",
  left = "60%",
  duration = 12,
}: GlowOrbProps) {
  return (
    <div
      className="glow-orb"
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        pointerEvents: "none",
        zIndex: 0,
        animation: `glowDrift ${duration}s ease-in-out infinite alternate`,
        willChange: "transform",
      }}
    />
  );
}
