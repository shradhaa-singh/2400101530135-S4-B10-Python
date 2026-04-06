import { useState } from "react";
import {
  formCard,
  pageShell,
  palette,
  primaryButton,
  resultBox,
  subtitleStyle,
} from "../ui";

export default function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <div style={pageShell}>
      <div style={{ ...formCard, textAlign: "center" }}>
        <p style={{ margin: 0, color: palette.accent, fontWeight: 700, letterSpacing: "0.08em" }}>TOGGLE</p>
        <h2 style={{ margin: "10px 0 0", fontSize: "2.2rem", color: palette.ink }}>Flip the state</h2>

        <div style={resultBox(on ? "success" : "neutral")}>
          {on ? "Status: ON" : "Status: OFF"}
        </div>

        <button style={{ ...primaryButton, width: "100%", marginTop: "18px" }} onClick={() => setOn(!on)}>
          Toggle
        </button>
      </div>
    </div>
  );
}
