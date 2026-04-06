import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Palindrome from "./pages/Palindrome";
import Prime from "./pages/Prime";
import Theme from "./pages/Theme";
import NotFound from "./pages/NotFound";
import Toggle from "./pages/Toggle";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.fontFamily = "Poppins, sans-serif";
    document.body.style.transition = "0.3s";
    document.body.style.minHeight = "100vh";

    if (theme === "dark") {
      document.body.style.background =
        "radial-gradient(circle at top left, rgba(45, 212, 191, 0.22), transparent 30%), linear-gradient(135deg, #052e2b, #0f172a 58%, #0f766e)";
      document.body.style.color = "#e6fffb";
    } else {
      document.body.style.background =
        "radial-gradient(circle at top left, rgba(15, 118, 110, 0.14), transparent 24%), linear-gradient(135deg, #ecfeff, #f8fafc 58%, #cffafe)";
      document.body.style.color = "#0f172a";
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Navbar theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/palindrome" element={<Palindrome />} />
        <Route path="/prime" element={<Prime />} />
        <Route path="/theme" element={<Theme theme={theme} setTheme={setTheme} />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
