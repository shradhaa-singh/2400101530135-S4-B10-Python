import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { palette } from "../ui";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 860);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const nextIsMobile = window.innerWidth <= 860;
      setIsMobile(nextIsMobile);
      if (!nextIsMobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  const nav = {
    display: "grid",
    gap: "18px",
    padding: "18px 24px",
    margin: "16px auto 0",
    width: "min(1180px, calc(100% - 24px))",
    boxSizing: "border-box",
    backdropFilter: "blur(14px)",
    background: palette.navBg,
    border: `1px solid ${palette.navBorder}`,
    borderRadius: "24px",
    position: "sticky",
    top: "14px",
    zIndex: 10,
    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
  };

  const topRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
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
    ["Work", "/#react-work"],
    ["Contact", "/#contact-me"],
  ];

  const activeLink = {
    background: palette.accentSoft,
    color: palette.activeText,
  };

  const contactButton = {
    textDecoration: "none",
    border: "none",
    background: `linear-gradient(135deg, ${palette.accent}, ${palette.accentAlt})`,
    color: "#ffffff",
    fontWeight: 700,
    padding: "10px 16px",
    borderRadius: "999px",
    fontSize: "0.95rem",
    cursor: "pointer",
    boxShadow: "0 14px 30px rgba(15, 23, 42, 0.14)",
  };

  const menuButton = {
    display: isMobile ? "inline-flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${palette.line}`,
    background: palette.surface,
    color: palette.ink,
    borderRadius: "14px",
    padding: "10px 14px",
    fontSize: "0.95rem",
    fontWeight: 700,
    cursor: "pointer",
    flexShrink: 0,
  };

  const desktopLinks = useMemo(
    () => ({
      display: isMobile ? "none" : "flex",
      flexWrap: "wrap",
      gap: "8px",
      justifyContent: "flex-end",
    }),
    [isMobile]
  );

  const mobileLinks = useMemo(
    () => ({
      display: isMobile && isMenuOpen ? "grid" : "none",
      gap: "8px",
      borderTop: `1px solid ${palette.line}`,
      paddingTop: "12px",
    }),
    [isMenuOpen, isMobile]
  );

  const goToSection = (sectionId) => {
    navigate(`/#${sectionId}`);
  };

  const isHashActive = (hash) => location.pathname === "/" && location.hash === hash;

  return (
    <div style={nav}>
      <div style={topRow}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "grid",
            gap: "2px",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <strong style={{ fontSize: "1.05rem", letterSpacing: "0.04em" }}>Shradha Singh</strong>
          <span style={{ fontSize: "0.8rem", opacity: 0.78 }}>React Portfolio</span>
        </Link>

        <button
          type="button"
          style={menuButton}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div style={desktopLinks}>
        {links.map(([label, to]) => {
          if (to.startsWith("/#")) {
            return (
              <button
                key={to}
                type="button"
                onClick={() => goToSection(to.slice(2))}
                style={{
                  ...link,
                  ...(isHashActive(to.slice(1)) ? activeLink : {}),
                  border: "none",
                  background: isHashActive(to.slice(1)) ? palette.accentSoft : "transparent",
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            );
          }

          return (
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
          );
        })}

        <button type="button" onClick={() => goToSection("contact-me")} style={contactButton}>
          Hire Me
        </button>
      </div>

      <div style={mobileLinks}>
        {links.map(([label, to]) => {
          if (to.startsWith("/#")) {
            return (
              <button
                key={`${to}-mobile`}
                type="button"
                onClick={() => goToSection(to.slice(2))}
                style={{
                  ...link,
                  ...(isHashActive(to.slice(1)) ? activeLink : {}),
                  textAlign: "center",
                  border: "none",
                  background: isHashActive(to.slice(1)) ? palette.accentSoft : "transparent",
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            );
          }

          return (
            <NavLink
              key={`${to}-mobile`}
              to={to}
              style={({ isActive }) => ({
                ...link,
                ...(isActive ? activeLink : {}),
                textAlign: "center",
              })}
            >
              {label}
            </NavLink>
          );
        })}

        <button type="button" onClick={() => goToSection("contact-me")} style={contactButton}>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
