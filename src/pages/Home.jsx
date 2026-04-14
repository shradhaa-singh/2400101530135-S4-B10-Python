import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { palette } from "../ui";

const profile = {
  name: "Shradha Singh",
  title: "React Developer",
  subtitle: "Frontend-focused builder with an AI/ML mindset",
  email: "shradhasingh72558@gmail.com",
  linkedin: "https://linkedin.com/in/shradhaasingh",
  github: "https://github.com/shradhaa-singh",
};

const pages = [
  ["Counter App", "/counter", "An interactive counter flow with clean state handling and responsive feedback."],
  ["Calculator UI", "/calculator", "A polished calculator interface built for quick use and tidy visual balance."],
  ["Login Screen", "/login", "A modern auth page with cleaner spacing, inputs, and overall structure."],
  ["Register Form", "/register", "A more product-style sign-up layout instead of a plain classroom form."],
  ["Palindrome Checker", "/palindrome", "A simple logic utility with immediate result messaging and compact UX."],
  ["Prime Checker", "/prime", "A focused number-validation page that keeps the interaction straightforward."],
  ["Toggle State Demo", "/toggle", "A small but useful state interaction example with clear visual change."],
  ["Theme Switcher", "/theme", "A multi-theme page that shows app-wide styling control in real time."],
  ["Weather Search", "/weather", "An API-connected page for fetching current weather information by city."],
  ["Map View", "/map", "A location-focused page that combines search context with embedded maps."],
];

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rotatingSkills = useMemo(
    () => [
      "React UI Development",
      "Java,Python for Problem Solving",
      "Responsive Layout Systems",
      "Data Analyst",
    ],
    [],
  );
  const rotationStepMs = 3000;
  const [skillIndex, setSkillIndex] = useState(0);
  const [showSkill, setShowSkill] = useState(true);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  useEffect(() => {
    let timeoutId;
    const intervalId = window.setInterval(() => {
      setShowSkill(false);
      timeoutId = window.setTimeout(() => {
        setSkillIndex((prev) => (prev + 1) % rotatingSkills.length);
        setShowSkill(true);
      }, 240);
    }, rotationStepMs);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [rotationStepMs, rotatingSkills.length]);

  const goToSection = (sectionId) => {
    navigate(`/#${sectionId}`);
  };

  const sectionCard = {
    width: "min(1180px, 100%)",
    margin: "0 auto",
    padding: "clamp(24px, 5vw, 48px)",
    borderRadius: "36px",
    border: `1px solid ${palette.line}`,
    background: `linear-gradient(145deg, ${palette.surfaceStrong}, ${palette.surfaceSoft})`,
    backdropFilter: "blur(18px)",
    boxShadow: "0 28px 80px rgba(15, 23, 42, 0.12)",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 84px)",
        padding: "24px 20px 72px",
        boxSizing: "border-box",
        color: palette.ink,
      }}
    >
      <section
        style={{
          ...sectionCard,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "36px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid", gap: "18px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "999px",
              background: palette.accentSoft,
              color: palette.accentStrong,
              fontWeight: 700,
              width: "fit-content",
              letterSpacing: "0.04em",
            }}
          >
              My Portfolio
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.8rem, 6vw, 5.4rem)",
              lineHeight: 0.9,
              maxWidth: "11ch",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ display: "block", color: palette.ink }}>Hi, I am</span>
            <span
              style={{
                display: "block",
                background: `linear-gradient(130deg, ${palette.accentStrong}, ${palette.accentAlt})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Shradha Singh
            </span>
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "fit-content",
              marginTop: "-2px",
              padding: "10px 14px",
              borderRadius: "14px",
              border: `1px solid ${palette.line}`,
              background: palette.surface,
            }}
          >
            <span
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "999px",
                background: palette.accent,
                boxShadow: `0 0 0 5px ${palette.accentSoft}`,
                flexShrink: 0,
              }}
            />
            <strong
              style={{
                color: palette.ink,
                fontSize: "1.02rem",
                fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif",
                letterSpacing: "0.02em",
                opacity: showSkill ? 1 : 0,
                transform: showSkill ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.24s ease, transform 0.24s ease",
              }}
            >
              {rotatingSkills[skillIndex]}
            </strong>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: "58ch",
              color: palette.subtext,
              lineHeight: 1.85,
              fontSize: "1.02rem",
            }}
          >
            I am {profile.name}, a frontend-focused developer who enjoys building
            clean experiences, practical interactions, and polished layouts. My work
            sits at the intersection of UI, problem solving, and AI/ML curiosity.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "6px",
            }}
          >
            <button
              type="button"
              onClick={() => goToSection("react-work")}
              style={{
                padding: "14px 20px",
                borderRadius: "999px",
                border: "none",
                background: `linear-gradient(135deg, ${palette.accent}, ${palette.accentAlt})`,
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: 700,
                boxShadow: "0 18px 36px rgba(15, 23, 42, 0.16)",
              }}
            >
              Explore My Work
            </button>

            <button
              type="button"
              onClick={() => goToSection("contact-me")}
              style={{
                padding: "14px 20px",
                borderRadius: "999px",
                border: `1px solid ${palette.line}`,
                background: palette.surface,
                color: palette.ink,
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Contact Me
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "14px",
              marginTop: "12px",
            }}
          >
          </div>
        </div>

        <div style={{ display: "grid", justifyItems: "center" }}>
          <div
            style={{
              position: "relative",
              width: "min(420px, 100%)",
              aspectRatio: "4 / 5",
              borderRadius: "36px",
              overflow: "hidden",
              border: `1px solid ${palette.line}`,
              boxShadow: "0 30px 70px rgba(15, 23, 42, 0.18)",
              background: `linear-gradient(180deg, ${palette.surfaceStrong}, ${palette.surface})`,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "auto auto 18px 18px",
                zIndex: 2,
                padding: "12px 14px",
                borderRadius: "18px",
                background: "rgba(15, 23, 42, 0.42)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(14px)",
                color: "#ffffff",
              }}
            >
              <strong style={{ display: "block", fontSize: "1rem" }}>{profile.name}</strong>
              <span style={{ fontSize: "0.86rem", opacity: 0.88 }}>
                {profile.title} • AI/ML Enthusiast
              </span>
            </div>

            <img
              src="/photo.jpeg"
              alt="Shradha Singh portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      <section
        id="react-work"
        style={{
          ...sectionCard,
          marginTop: "32px",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <p
            style={{
              margin: 0,
              color: palette.accent,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            SELECTED REACT PAGES
          </p>
          <h2
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1,
            }}
          >
            These are the pages I built with React inside this project.
          </h2>
          <p
            style={{
              margin: "14px 0 0",
              color: palette.subtext,
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            Each page explores a different piece of frontend work, including forms,
            utilities, state handling, routing, theming, and API integration. Open
            any card to view the live page directly.
          </p>
        </div>

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {pages.map(([title, path, description]) => (
            <button
              key={title}
              type="button"
              onClick={() => navigate(path)}
              style={{
                padding: "22px",
                borderRadius: "26px",
                background: palette.surface,
                border: `1px solid ${palette.line}`,
                boxShadow: "0 16px 36px rgba(15, 23, 42, 0.08)",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                color: palette.ink,
                textAlign: "left",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-4px)";
                event.currentTarget.style.boxShadow = "0 22px 42px rgba(15, 23, 42, 0.12)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow = "0 16px 36px rgba(15, 23, 42, 0.08)";
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "16px",
                  display: "grid",
                  placeItems: "center",
                  background: `linear-gradient(135deg, ${palette.accentSoft}, ${palette.surfaceStrong})`,
                  color: palette.accent,
                  fontWeight: 800,
                  marginBottom: "18px",
                }}
              >
                {title[0]}
              </div>
              <h3 style={{ margin: 0, fontSize: "1.08rem" }}>{title}</h3>
              <p style={{ margin: "10px 0 0", color: palette.subtext, lineHeight: 1.65 }}>
                {description}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section
        id="contact-me"
        style={{
          ...sectionCard,
          marginTop: "32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "26px",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: palette.accent,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            CONTACT ME
          </p>
          <h2
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(2rem, 4vw, 3.3rem)",
              lineHeight: 1,
            }}
          >
            Need a clean frontend build or a strong React page?
          </h2>
          <p
            style={{
              margin: "14px 0 0",
              color: palette.subtext,
              lineHeight: 1.8,
              maxWidth: "54ch",
            }}
          >
            I am open to internships, freelance-style frontend work, and projects
            where thoughtful UI and practical implementation matter.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "14px",
          }}
        >
          {[
            ["Email", profile.email, `mailto:${profile.email}`],
            ["LinkedIn", "linkedin.com/in/shradhaasingh", profile.linkedin],
            ["GitHub", "github.com/shradhaa-singh", profile.github],
          ].map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                textDecoration: "none",
                color: palette.ink,
                padding: "18px 20px",
                borderRadius: "22px",
                background: palette.surface,
                border: `1px solid ${palette.line}`,
                display: "grid",
                gap: "6px",
              }}
            >
              <span style={{ color: palette.accent, fontWeight: 700, letterSpacing: "0.04em" }}>
                {label}
              </span>
              <strong>{value}</strong>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
