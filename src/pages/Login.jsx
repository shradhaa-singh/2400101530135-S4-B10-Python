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

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [tone, setTone] = useState("neutral");

  const handleLogin = () => {
    if (!data.email || !data.password) {
      setTone("warning");
      setMessage("Enter both email and password before continuing.");
      return;
    }

    setTone("success");
    setMessage(`Welcome back, ${data.email}. Your login form is ready.`);
  };

  return (
    <div style={pageShell}>
      <div style={formCard}>
        <p style={{ margin: 0, color: palette.accent, fontWeight: 700, letterSpacing: "0.08em" }}>LOGIN</p>

        <div style={formStack}>
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
              placeholder="Enter your password"
              onChange={e => setData({ ...data, password: e.target.value })}
            />
          </label>
        </div>

        <button style={{ ...primaryButton, width: "100%", marginTop: "22px" }} onClick={handleLogin}>
          Login
        </button>

        {message ? <div style={resultBox(tone)}>{message}</div> : null}
      </div>
    </div>
  );
};

export default Login;
