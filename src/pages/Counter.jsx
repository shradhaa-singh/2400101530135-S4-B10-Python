import { useState } from "react";
import {
  formCard,
  metricCard,
  pageShell,
  palette,
  primaryButton,
  secondaryButton,
  splitActions,
  subtitleStyle,
} from "../ui";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={pageShell}>
      <div style={{ ...formCard, textAlign: "center" }}>
        <p style={{ margin: 0, color: palette.accent, fontWeight: 700, letterSpacing: "0.08em" }}>
          COUNTER
        </p>

        <div style={{ ...metricCard, marginTop: "28px" }}>
          <div style={{ fontSize: "0.9rem", color: palette.subtext }}>Current count</div>
          <h1 style={{ margin: "10px 0 0", fontSize: "4rem", color: palette.accent }}>{count}</h1>
        </div>

        <div style={{ ...splitActions, justifyContent: "center" }}>
          <button style={primaryButton} onClick={() => setCount(count + 1)}>Increase</button>
          <button style={secondaryButton} onClick={() => setCount(count - 1)}>Decrease</button>
          <button style={secondaryButton} onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
