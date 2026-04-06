import { useNavigate } from "react-router-dom";
import { formCard, pageShell, palette, primaryButton, subtitleStyle } from "../ui";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={pageShell}>
      <div style={{ ...formCard, textAlign: "center" }}>
        <p style={{ margin: 0, color: palette.accentAlt, fontWeight: 700, letterSpacing: "0.08em" }}>404 ERROR</p>
        <h2 style={{ margin: "10px 0 0", fontSize: "2.6rem", color: palette.ink }}>Page not found</h2>
        <p style={subtitleStyle}>
          The route does not exist. This fallback screen now matches the rest of the app instead of feeling abandoned.
        </p>
        <button style={{ ...primaryButton, marginTop: "20px" }} onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
