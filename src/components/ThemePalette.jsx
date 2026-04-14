import { useEffect, useState } from "react";
import { palette, themeOptions } from "../ui";

const ThemePalette = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeTheme = themeOptions.find((option) => option.name === theme) || themeOptions[0];

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 30,
        display: "grid",
        gap: "12px",
        justifyItems: "end",
      }}
    >
      {isOpen ? (
        <div
          style={{
            width: "min(280px, calc(100vw - 40px))",
            padding: "18px",
            borderRadius: "24px",
            background: `linear-gradient(180deg, ${palette.surfaceStrong}, ${palette.surfaceSoft})`,
            border: `1px solid ${palette.line}`,
            boxShadow: "0 22px 60px rgba(15, 23, 42, 0.18)",
            backdropFilter: "blur(18px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                  color: palette.accent,
                }}
              >
                THEME
              </div>
              <div style={{ marginTop: "6px", fontWeight: 700, color: palette.ink }}>
                Pick a look for this app
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close theme palette"
              style={{
                border: `1px solid ${palette.line}`,
                background: palette.surface,
                color: palette.ink,
                width: "36px",
                height: "36px",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              marginTop: "16px",
              display: "grid",
              gap: "10px",
            }}
          >
            {themeOptions.map((option) => {
              const isActive = option.name === theme;

              return (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setTheme(option.name)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "18px",
                    border: isActive ? `2px solid ${palette.accent}` : `1px solid ${palette.line}`,
                    background: palette.surface,
                    color: palette.ink,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "14px",
                      background: option.swatch,
                      border: `1px solid ${palette.line}`,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ display: "grid", gap: "3px" }}>
                    <strong style={{ fontSize: "0.95rem" }}>{option.label}</strong>
                    <span style={{ color: palette.subtext, fontSize: "0.82rem" }}>
                      {isActive ? "Currently active" : "Apply this theme"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Open theme palette"
        aria-expanded={isOpen}
        style={{
          width: "62px",
          height: "62px",
          borderRadius: "999px",
          border: `1px solid ${palette.line}`,
          background: activeTheme.swatch,
          color: "#ffffff",
          cursor: "pointer",
          boxShadow: "0 18px 40px rgba(15, 23, 42, 0.24)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 3C7.03 3 3 6.58 3 11C3 14.87 6.09 18 10 18H11.2C12.19 18 13 18.81 13 19.8C13 20.46 13.54 21 14.2 21C18.51 21 22 17.42 22 13C22 7.48 17.52 3 12 3Z"
            fill="rgba(255,255,255,0.92)"
          />
          <circle cx="8" cy="11" r="1.2" fill={palette.accentStrong} />
          <circle cx="11.2" cy="8.2" r="1.2" fill="#f97316" />
          <circle cx="15.2" cy="8.8" r="1.2" fill="#38bdf8" />
          <circle cx="16.4" cy="13" r="1.2" fill="#facc15" />
        </svg>
      </button>
    </div>
  );
};

export default ThemePalette;
