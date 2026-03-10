import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Counter from "./Counter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;