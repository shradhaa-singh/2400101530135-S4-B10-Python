import { useState } from "react";
import { pageShell, palette } from "../ui";

const buttons = [
  ["C", "action"],
  ["DEL", "action"],
  ["%", "operator"],
  ["÷", "operator"],
  ["7", "number"],
  ["8", "number"],
  ["9", "number"],
  ["×", "operator"],
  ["4", "number"],
  ["5", "number"],
  ["6", "number"],
  ["-", "operator"],
  ["1", "number"],
  ["2", "number"],
  ["3", "number"],
  ["+", "operator"],
  ["0", "number wide"],
  [".", "number"],
  ["=", "equals"],
];

const operatorLabels = new Set(["+", "-", "×", "÷", "%"]);

const Calculator = () => {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState("");

  const appendValue = (value) => {
    setExpression((current) => {
      if (current === "0" && !operatorLabels.has(value) && value !== ".") {
        return value;
      }

      if (value === ".") {
        const parts = current.split(/[+\-×÷%]/);
        const activePart = parts[parts.length - 1];
        if (activePart.includes(".")) return current;
      }

      if (operatorLabels.has(value)) {
        const lastChar = current.slice(-1);
        if (operatorLabels.has(lastChar)) {
          return current.slice(0, -1) + value;
        }
      }

      return current === "0" && value === "." ? "0." : current + value;
    });
  };

  const clearAll = () => {
    setExpression("0");
    setResult("");
  };

  const deleteLast = () => {
    setExpression((current) => {
      if (current.length <= 1) return "0";
      return current.slice(0, -1);
    });
  };

  const evaluateExpression = () => {
    try {
      const normalized = expression.replace(/×/g, "*").replace(/÷/g, "/");

      if (!/^[0-9+\-*/%. ]+$/.test(normalized)) {
        throw new Error("Invalid expression");
      }

      const computed = Function(`"use strict"; return (${normalized})`)();

      if (!Number.isFinite(computed)) {
        throw new Error("Invalid expression");
      }

      const nextResult = Number(computed.toFixed(8)).toString();
      setExpression(nextResult);
      setResult(nextResult);
    } catch {
      setResult("Error");
    }
  };

  const handleButtonClick = (label) => {
    if (label === "C") {
      clearAll();
      return;
    }

    if (label === "DEL") {
      deleteLast();
      return;
    }

    if (label === "=") {
      evaluateExpression();
      return;
    }

    setResult("");
    appendValue(label);
  };

  return (
    <div style={pageShell}>
      <div style={calculatorShell}>
        <div style={displayCard}>
          <p style={eyebrow}>CALCULATOR</p>
          <div style={expressionText}>{expression}</div>
          <div style={resultText}>{result ? `= ${result}` : "= 0"}</div>
        </div>

        <div style={keypad}>
          {buttons.map(([label, tone]) => {
            const isWide = tone.includes("wide");
            return (
              <button
                key={label}
                onClick={() => handleButtonClick(label)}
                style={{
                  ...buttonBase,
                  ...(tone.startsWith("action")
                    ? actionButton
                    : tone.startsWith("operator")
                    ? operatorButton
                    : tone === "equals"
                    ? equalsButton
                    : numberButton),
                  gridColumn: isWide ? "span 2" : "span 1",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const calculatorShell = {
  width: "min(420px, 100%)",
  padding: "24px",
  borderRadius: "32px",
  background:
    "linear-gradient(160deg, var(--surfaceStrong), var(--surfaceSoft) 54%, var(--surface))",
  border: "1px solid var(--line)",
  boxShadow: "0 28px 80px rgba(15, 23, 42, 0.18)",
  backdropFilter: "blur(22px)",
  boxSizing: "border-box",
};

const displayCard = {
  minHeight: "180px",
  borderRadius: "26px",
  padding: "22px",
  background:
    "radial-gradient(circle at top right, rgba(34,197,94,0.16), transparent 26%), linear-gradient(180deg, #0f172a, #1e293b)",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
};

const eyebrow = {
  margin: 0,
  fontSize: "0.8rem",
  letterSpacing: "0.16em",
  color: "rgba(226, 232, 240, 0.7)",
};

const expressionText = {
  marginTop: "24px",
  textAlign: "right",
  fontSize: "clamp(2rem, 7vw, 3.3rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  wordBreak: "break-all",
};

const resultText = {
  textAlign: "right",
  color: "rgba(226, 232, 240, 0.82)",
  fontSize: "1rem",
};

const keypad = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "14px",
  marginTop: "20px",
};

const buttonBase = {
  minHeight: "66px",
  border: "none",
  borderRadius: "22px",
  fontSize: "1.15rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "transform 0.18s ease, box-shadow 0.18s ease",
};

const numberButton = {
  background: "var(--surface)",
  color: palette.ink,
  boxShadow: "0 14px 28px rgba(148, 163, 184, 0.18)",
};

const operatorButton = {
  background: "linear-gradient(135deg, var(--accentSoft), var(--surfaceStrong))",
  color: palette.accent,
  boxShadow: "0 16px 30px rgba(20, 184, 166, 0.22)",
};

const actionButton = {
  background: "linear-gradient(135deg, #fee2e2, #fecaca)",
  color: "#b91c1c",
  boxShadow: "0 16px 28px rgba(248, 113, 113, 0.2)",
};

const equalsButton = {
  background: "linear-gradient(135deg, var(--accent), var(--accentStrong))",
  color: "#f8fafc",
  boxShadow: "0 20px 34px rgba(15, 118, 110, 0.28)",
};

export default Calculator;
