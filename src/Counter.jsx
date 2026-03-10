import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="counter-container">
      <h2>Counter Page</h2>
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className="logout-btn" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default Counter;