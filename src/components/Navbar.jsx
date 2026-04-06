import { Link, NavLink } from "react-router-dom";
import { palette } from "../ui";

const Navbar = ({ theme }) => {
  const nav = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
    padding: "18px 24px",
    margin: "16px auto 0",
    width: "min(1180px, calc(100% - 24px))",
    boxSizing: "border-box",
    backdropFilter: "blur(14px)",
    background: theme === "dark" ? "rgba(15, 23, 42, 0.28)" : "rgba(255, 255, 255, 0.62)",
    border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.08)"}`,
    borderRadius: "24px",
    position: "sticky",
    top: "14px",
    zIndex: 10,
    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
  };

  const link = {
    textDecoration: "none",
    color: "inherit",
    fontWeight: 600,
    padding: "10px 14px",
    borderRadius: "999px",
    fontSize: "0.95rem",
  };

  const links = [
    ["Home", "/"],
    ["Counter", "/counter"],
    ["Login", "/login"],
    ["Register", "/register"],
    ["Palindrome", "/palindrome"],
    ["Prime", "/prime"],
    ["Toggle", "/toggle"],
    ["Theme", "/theme"],
  ];

  const activeLink = {
    background: theme === "dark" ? "rgba(45, 212, 191, 0.18)" : palette.accentSoft,
    color: theme === "dark" ? "#ccfbf1" : palette.accent,
  };

  return (
    <div style={nav}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "grid",
          gap: "2px",
        }}
      >
        <strong style={{ fontSize: "1.05rem", letterSpacing: "0.04em" }}>PortFolio</strong>
        <span style={{ fontSize: "0.8rem", opacity: 0.78 }}>Built with React</span>
      </Link>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-end" }}>
        {links.map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              ...link,
              ...(isActive ? activeLink : {}),
            })}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
