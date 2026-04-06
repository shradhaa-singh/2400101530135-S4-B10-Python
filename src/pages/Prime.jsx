import { useState } from "react";
import {
  formCard,
  inputStyle,
  pageShell,
  palette,
  primaryButton,
  resultBox,
  subtitleStyle,
} from "../ui";

const Prime = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [tone, setTone] = useState("neutral");

  const handleCheck = () => {
    const n = Number(num);

    if (!num || Number.isNaN(n)) {
      setTone("warning");
      setResult("Enter a valid number.");
      return;
    }

    if (n < 2 || !Number.isInteger(n)) {
      setTone("danger");
      setResult("Prime numbers must be whole numbers greater than 1.");
      return;
    }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        setTone("danger");
        setResult(`${n} is not prime.`);
        return;
      }
    }

    setTone("success");
    setResult(`${n} is a prime number.`);
  };

  return (
    <div style={pageShell}>
      <div style={formCard}>
        <p style={{ margin: 0, color: palette.accentAlt, fontWeight: 700, letterSpacing: "0.08em" }}>
          PRIME CHECKER
        </p>
        <h2 style={{ margin: "10px 0 0", fontSize: "2.2rem", color: palette.ink }}>Test any number</h2>

        <input
          style={{ ...inputStyle, marginTop: "24px" }}
          type="number"
          placeholder="Enter a number"
          onChange={e => setNum(e.target.value)}
        />
        <button style={{ ...primaryButton, width: "100%", marginTop: "16px" }} onClick={handleCheck}>
          Check Prime
        </button>

        {result ? <div style={resultBox(tone)}>{result}</div> : null}
      </div>
    </div>
  );
};

export default Prime;
