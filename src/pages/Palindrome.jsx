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

const Palindrome = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [tone, setTone] = useState("neutral");

  const handleCheck = () => {
    const str = text.trim().toLowerCase();

    if (!str) {
      setTone("warning");
      setResult("Enter a word or phrase to test.");
      return;
    }

    const normalized = str.replace(/\s+/g, "");
    const rev = normalized.split("").reverse().join("");
    const isPalindrome = normalized === rev;

    setTone(isPalindrome ? "success" : "danger");
    setResult(isPalindrome ? `"${text}" is a palindrome.` : `"${text}" is not a palindrome.`);
  };

  return (
    <div style={pageShell}>
      <div style={formCard}>
        <p style={{ margin: 0, color: palette.accent, fontWeight: 700, letterSpacing: "0.08em" }}>
          PALINDROME
        </p>
        <h2 style={{ margin: "10px 0 0", fontSize: "2.2rem", color: palette.ink }}>Test any number</h2>

        <input
          style={{ ...inputStyle, marginTop: "24px" }}
          placeholder="Enter a number"
          onChange={e => setText(e.target.value)}
        />
        <button style={{ ...primaryButton, width: "100%", marginTop: "16px" }} onClick={handleCheck}>
          Check Palindrome
        </button>

        {result ? <div style={resultBox(tone)}>{result}</div> : null}
      </div>
    </div>
  );
};

export default Palindrome;
