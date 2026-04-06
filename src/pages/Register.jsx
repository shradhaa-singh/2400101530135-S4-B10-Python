import { useState } from "react";
import {
  formCard,
  formStack,
  inputStyle,
  labelStyle,
  pageShell,
  palette,
  primaryButton,
  resultBox,
  subtitleStyle,
} from "../ui";

const Register = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [tone, setTone] = useState("neutral");

  const handleRegister = () => {
    if (!data.name || !data.email || !data.password) {
      setTone("warning");
      setMessage("Complete all fields to create your account.");
      return;
    }

    setTone("success");
    setMessage(`Account created for ${data.name}. The layout is now cleaner and easier to scan.`);
  };

  return (
    <div style={pageShell}>
      <div style={formCard}>
        <p style={{ margin: 0, color: palette.accentAlt, fontWeight: 700, letterSpacing: "0.08em" }}>REGISTER</p>
        <h2 style={{ margin: "10px 0 0", fontSize: "2.2rem", color: palette.ink }}>Create a new account</h2>

        <div style={formStack}>
          <label style={labelStyle}>
            Full Name
            <input
              style={inputStyle}
              placeholder="Your full name"
              onChange={e => setData({ ...data, name: e.target.value })}
            />
          </label>
          <label style={labelStyle}>
            Email Address
            <input
              style={inputStyle}
              placeholder="you@example.com"
              onChange={e => setData({ ...data, email: e.target.value })}
            />
          </label>
          <label style={labelStyle}>
            Password
            <input
              style={inputStyle}
              type="password"
              placeholder="Choose a password"
              onChange={e => setData({ ...data, password: e.target.value })}
            />
          </label>
        </div>

        <button style={{ ...primaryButton, width: "100%", marginTop: "22px" }} onClick={handleRegister}>
          Register
        </button>

        {message ? <div style={resultBox(tone)}>{message}</div> : null}
      </div>
    </div>
  );
};

export default Register;
