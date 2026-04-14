import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, themePresets } from "./ui";

import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Palindrome from "./pages/Palindrome";
import Prime from "./pages/Prime";
import Theme from "./pages/Theme";
import Toggle from "./pages/Toggle";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";
import Map from "./pages/Map";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import ThemePalette from "./components/ThemePalette";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("app-theme") || "dark");

  useEffect(() => {
    const nextTheme = themePresets[theme] ? theme : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("app-theme", nextTheme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/palindrome" element={<Palindrome />} />
        <Route path="/prime" element={<Prime />} />
        <Route path="/theme" element={<Theme theme={theme} setTheme={setTheme} />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <ThemePalette theme={theme} setTheme={setTheme} />
    </BrowserRouter>
  );
}

export default App;
