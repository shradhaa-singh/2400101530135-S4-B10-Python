export const palette = {
  ink: "#0f172a",
  subtext: "#475569",
  line: "rgba(15, 23, 42, 0.12)",
  surface: "rgba(255, 255, 255, 0.72)",
  surfaceStrong: "rgba(255, 255, 255, 0.9)",
  accent: "#0f766e",
  accentSoft: "#ccfbf1",
  accentAlt: "#f97316",
  success: "#15803d",
  danger: "#dc2626",
  warning: "#b45309",
};

export const pageShell = {
  minHeight: "calc(100vh - 84px)",
  padding: "48px 20px 72px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  boxSizing: "border-box",
};

export const heroCard = {
  width: "min(960px, 100%)",
  padding: "32px",
  borderRadius: "32px",
  background: `linear-gradient(145deg, ${palette.surfaceStrong}, rgba(255, 255, 255, 0.55))`,
  border: `1px solid ${palette.line}`,
  boxShadow: "0 24px 80px rgba(15, 23, 42, 0.12)",
  backdropFilter: "blur(18px)",
  color: palette.ink,
  boxSizing: "border-box",
};

export const titleStyle = {
  margin: 0,
  fontSize: "clamp(2rem, 4vw, 3.2rem)",
  lineHeight: 1.05,
};

export const subtitleStyle = {
  margin: "14px 0 0",
  fontSize: "1rem",
  lineHeight: 1.7,
  color: palette.subtext,
};

export const formCard = {
  width: "min(520px, 100%)",
  padding: "32px",
  borderRadius: "28px",
  background: `linear-gradient(180deg, ${palette.surfaceStrong}, rgba(255, 255, 255, 0.58))`,
  border: `1px solid ${palette.line}`,
  boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
  backdropFilter: "blur(18px)",
  color: palette.ink,
  boxSizing: "border-box",
};

export const formStack = {
  display: "grid",
  gap: "14px",
  marginTop: "28px",
};

export const labelStyle = {
  display: "grid",
  gap: "8px",
  textAlign: "left",
  fontSize: "0.95rem",
  fontWeight: 600,
  color: palette.ink,
};

export const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  border: `1px solid rgba(15, 23, 42, 0.14)`,
  background: "rgba(255, 255, 255, 0.85)",
  color: palette.ink,
  borderRadius: "16px",
  padding: "14px 16px",
  fontSize: "1rem",
  outline: "none",
};

export const primaryButton = {
  border: "none",
  borderRadius: "16px",
  padding: "14px 18px",
  background: `linear-gradient(135deg, ${palette.accent}, #115e59)`,
  color: "#f8fafc",
  fontSize: "1rem",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 16px 30px rgba(15, 118, 110, 0.22)",
};

export const secondaryButton = {
  ...primaryButton,
  background: "rgba(255, 255, 255, 0.82)",
  color: palette.ink,
  border: `1px solid rgba(15, 23, 42, 0.1)`,
  boxShadow: "none",
};

export const splitActions = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "22px",
};

export const metricCard = {
  padding: "18px",
  borderRadius: "22px",
  background: "rgba(255, 255, 255, 0.72)",
  border: `1px solid ${palette.line}`,
};

export const resultBox = (tone = "neutral") => {
  const toneMap = {
    neutral: {
      bg: "rgba(255, 255, 255, 0.84)",
      color: palette.ink,
      border: "rgba(15, 23, 42, 0.1)",
    },
    success: {
      bg: "rgba(220, 252, 231, 0.88)",
      color: palette.success,
      border: "rgba(34, 197, 94, 0.2)",
    },
    danger: {
      bg: "rgba(254, 226, 226, 0.92)",
      color: palette.danger,
      border: "rgba(239, 68, 68, 0.2)",
    },
    warning: {
      bg: "rgba(254, 243, 199, 0.92)",
      color: palette.warning,
      border: "rgba(245, 158, 11, 0.22)",
    },
  };

  const selected = toneMap[tone] || toneMap.neutral;

  return {
    marginTop: "20px",
    padding: "16px 18px",
    borderRadius: "18px",
    background: selected.bg,
    color: selected.color,
    border: `1px solid ${selected.border}`,
    fontWeight: 700,
  };
};
