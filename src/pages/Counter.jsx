import { useState } from "react";
import {
  formCard,
  metricCard,
  pageShell,
  palette,
  primaryButton,
  secondaryButton,
  splitActions,
} from "../ui";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

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
          COUNTER
        </p>

        {/* COUNT DISPLAY */}
        <div style={{ ...metricCard, marginTop: "28px" }}>
          <div style={{ fontSize: "0.9rem", color: palette.subtext }}>
            Current count
          </div>
          <h1
            style={{
              margin: "10px 0 0",
              fontSize: "4rem",
              color: palette.accent,
            }}
          >
            {count}
          </h1>
        </div>

        {/* QUICK ADD BUTTONS */}
        <div style={{ ...splitActions, justifyContent: "center", marginTop: "20px" }}>
          <button style={secondaryButton} onClick={() => setCount(count + 1)}>+1</button>
          <button style={secondaryButton} onClick={() => setCount(count + 5)}>+5</button>
          <button style={secondaryButton} onClick={() => setCount(count + 10)}>+10</button>
        </div>

        {/* CUSTOM STEP INPUT */}
        <input
          type="number"
          placeholder="Enter step (e.g. 2, 7)"
          value={step}
          onChange={(e) => setStep(Number(e.target.value) || 1)}
          style={{
            marginTop: "20px",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            width: "100%",
            textAlign: "center",
          }}
        />

        {/* ACTION BUTTONS */}
        <div style={{ ...splitActions, justifyContent: "center", marginTop: "15px" }}>
          <button style={primaryButton} onClick={() => setCount(count + step)}>
            Add {step}
          </button>

          <button style={secondaryButton} onClick={() => setCount(count - step)}>
            Subtract {step}
          </button>
        </div>

        {/* RESET */}
        <div style={{ marginTop: "10px" }}>
          <button style={secondaryButton} onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
