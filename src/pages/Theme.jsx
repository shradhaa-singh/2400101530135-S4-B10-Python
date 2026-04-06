import {
  formCard,
  pageShell,
  palette,
} from "../ui";

const Theme = ({ theme, setTheme }) => {
  const themes = [
    { name: "dark", label: "Dark", color: "#003135" },
    { name: "light", label: "Light", color: "#AFDDE5" },
    { name: "ocean", label: "Ocean", color: "#2C5364" },
    { name: "pastel", label: "Pastel", color: "#fbc2eb" },
    { name: "sunset", label: "Sunset", color: "#ff7e5f" },
  ];

  return (
    <div style={pageShell}>
      <div style={{ ...formCard, textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            color: palette.accent,
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          THEME
        </p>

        <h2
          style={{
            margin: "10px 0 0",
            fontSize: "2.2rem",
            color: palette.ink,
          }}
        >
          Switch the app atmosphere
        </h2>

        {/* ACTIVE THEME CARD */}
        <div
          style={{
            marginTop: "28px",
            padding: "22px",
            borderRadius: "24px",
            background: `linear-gradient(160deg, ${palette.panelStart}, ${palette.panelEnd})`,
            color: palette.ink,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div style={{ fontSize: "0.9rem", opacity: 0.82 }}>
            Active theme
          </div>
          <div
            style={{
              marginTop: "10px",
              fontSize: "2rem",
              fontWeight: 800,
              textTransform: "capitalize",
            }}
          >
            {theme}
          </div>
        </div>

        {/* THEME BUTTON GRID */}
        <div
          style={{
            marginTop: "25px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => setTheme(t.name)}
              style={{
                padding: "12px",
                borderRadius: "12px",
                border:
                  theme === t.name
                    ? `2px solid ${palette.accent}`
                    : `1px solid ${palette.line}`,
                background: t.color,
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
                transform: theme === t.name ? "scale(1.05)" : "scale(1)",
                transition: "0.3s",
                boxShadow:
                  theme === t.name
                    ? "0 18px 34px rgba(15, 23, 42, 0.18)"
                    : "0 10px 22px rgba(15, 23, 42, 0.1)",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theme;
