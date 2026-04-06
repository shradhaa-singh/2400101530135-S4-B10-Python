import { useNavigate } from "react-router-dom";
import { heroCard, pageShell, palette, subtitleStyle, titleStyle } from "../ui";

const Home = () => {
  const navigate = useNavigate();

  const pages = [
    ["Counter", "/counter"],
    ["Login", "/login"],
    ["Register", "/register"],
    ["Palindrome", "/palindrome"],
    ["Prime Checker", "/prime"],
    ["Toggle", "/toggle"],
    ["Theme", "/theme"],
  ];

  return (
    <div style={pageShell}>
      <div style={heroCard}>
        <div style={{ maxWidth: "720px" }}>
          <p style={{ margin: 0, color: palette.accent, fontWeight: 700, letterSpacing: "0.08em" }}>
            COMPONENTS
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginTop: "32px",
          }}
        >
          {pages.map(([title, path, description]) => (
            <div
              key={title}
              onClick={() => navigate(path)}
              style={{
                padding: "22px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.74)",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                boxShadow: "0 16px 36px rgba(15, 23, 42, 0.08)",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                color: palette.ink,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 22px 42px rgba(15, 23, 42, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 16px 36px rgba(15, 23, 42, 0.08)";
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "14px",
                  display: "grid",
                  placeItems: "center",
                  background: "linear-gradient(135deg, #ccfbf1, #f0fdfa)",
                  color: palette.accent,
                  fontWeight: 800,
                  marginBottom: "18px",
                }}
              >
                {title[0]}
              </div>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{title}</h3>
              <p style={{ margin: "10px 0 0", color: palette.subtext, lineHeight: 1.6 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
