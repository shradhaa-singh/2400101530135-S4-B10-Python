import {
  formCard,
  pageShell,
  palette,
  primaryButton,
  secondaryButton,
  splitActions,
  subtitleStyle,
} from "../ui";

const Theme = ({ theme, setTheme }) => {
  return (
    <div style={pageShell}>
      <div style={{ ...formCard, textAlign: "center" }}>
        <p style={{ margin: 0, color: palette.accent, fontWeight: 700, letterSpacing: "0.08em" }}>THEME</p>
        <h2 style={{ margin: "10px 0 0", fontSize: "2.2rem", color: palette.ink }}>Switch the app atmosphere</h2>

        <div
          style={{
            marginTop: "28px",
            padding: "22px",
            borderRadius: "24px",
            background: theme === "dark" ? "rgba(15, 23, 42, 0.9)" : "rgba(240, 253, 250, 0.95)",
            color: theme === "dark" ? "#ccfbf1" : palette.accent,
            border: "1px solid rgba(15, 23, 42, 0.08)",
          }}
        >
          <div style={{ fontSize: "0.9rem", opacity: 0.82 }}>Active theme</div>
          <div style={{ marginTop: "10px", fontSize: "2rem", fontWeight: 800, textTransform: "capitalize" }}>
            {theme}
          </div>
        </div>

        <div style={{ ...splitActions, justifyContent: "center" }}>
          <button style={primaryButton} onClick={() => setTheme("dark")}>Dark Mode</button>
          <button style={secondaryButton} onClick={() => setTheme("light")}>Light Mode</button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
