import {
  formCard,
  pageShell,
  palette,
  primaryButton,
} from "../ui";

const About = () => {
  // TODO: replace these placeholders with your actual portfolio data.
  // - Add your profile photo in `/public` and update `profilePhoto`.
  // - Add your resume file in `/public` and update `resumeFile`.
  // Example: profilePhoto: "/shradha-photo.jpg", resumeFile: "/Shradha-Singh-Resume.pdf"
  const profileData = {
    name: "Shradha Singh",
    headline: "AI/ML Enthusiast • React Developer • Problem Solver",
    email: "shradhasingh72558@gmail.com",
    linkedin: "https://linkedin.com/in/shradhaasingh",
    github: "https://github.com/shradhaa-singh",
    profilePhoto: "photo.jpeg",
    resumeFile: "./public/resumeFile.pdf",
  };

  const projects = [
    {
      title: "KrishiRakshhakAI",
      description: "An intelligent farming assistant that brings AI-powered crop disease diagnosis, weather forecasting, and voice-enabled agricultural guidance to your fingertips.",
      repoUrl: "https://github.com/shradhaa-singh/KrishiRakshhakAI.git",
    },
    {
      title: "Online Retail Customer Segmentation",
      description: "The Online Retail Customer Segmentation project focuses on analyzing real-world e-commerce transaction data to extract meaningful business insights.",
      repoUrl: "https://github.com/shradhaa-singh/Online-Retail-Customer-Segmentation.git",
    },
    {
      title: "Library Management System",
      description: "A desktop library management application built with Python, Tkinter, and SQLite.",
      repoUrl: "https://github.com/shradhaa-singh/LibraryManagementSystem.git",
    },
  ];

  const sectionTitle = {
    marginTop: "30px",
    marginBottom: "15px",
    color: palette.accent,
    fontWeight: "700",
    fontSize: "1.3rem",
    textAlign: "left",
  };

  const text = {
    fontSize: "0.95rem",
    color: palette.subtext,
    lineHeight: "1.6",
    textAlign: "left",
  };

  const progressBar = () => ({
    height: "8px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.1)",
    overflow: "hidden",
    marginTop: "5px",
    marginBottom: "10px",
    position: "relative",
  });

  const progressFill = (width) => ({
    width: width,
    height: "100%",
    background: "linear-gradient(90deg,#0FA4AF,#024950)",
    borderRadius: "10px",
  });

  const projectCard = {
    padding: "15px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.05)",
    transition: "0.3s",
    cursor: "pointer",
  };

  const linkStyle = {
    color: palette.accent,
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <div style={pageShell}>
      <div style={{ ...formCard, maxWidth: "900px" }}>
        
        {/* HERO SECTION */}
        <div style={{ textAlign: "center" }}>
          <img
            src={profileData.profilePhoto}
            alt={`${profileData.name} profile`}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: `3px solid ${palette.accent}`,
            }}
          />

          <h1 style={{ marginTop: "15px", color: palette.ink }}>
            {profileData.name}
          </h1>

          <p style={{ ...text, textAlign: "center" }}>
            {profileData.headline}
          </p>

          {/* TODO: keep your resume PDF in `/public` and update `resumeFile` above. */}
          <a
            href={profileData.resumeFile}
            target="_blank"
            rel="noreferrer"
            style={{
              ...primaryButton,
              marginTop: "15px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* ABOUT */}
        <div>
          <div style={sectionTitle}>About Me</div>
          <p style={text}>
            I am a Computer Science student specializing in AI/ML. I love building
            modern web applications and exploring machine learning concepts.
            My goal is to become an AI Engineer and build impactful tech solutions.
          </p>
        </div>

        {/* SKILLS WITH PROGRESS */}
        <div>
          <div style={sectionTitle}>Skills</div>

          <div style={text}>React</div>
          <div style={progressBar()}>
            <div style={progressFill("55%")} />
          </div>

          <div style={text}>Data Science</div>
          <div style={progressBar()}>
            <div style={progressFill("50%")} />
          </div>

          <div style={text}>Python</div>
          <div style={progressBar()}>
            <div style={progressFill("75%")} />
          </div>

          <div style={text}>DSA</div>
          <div style={progressBar()}>
            <div style={progressFill("30%")} />
          </div>
        </div>

        {/* TIMELINE */}
        <div>
          <div style={sectionTitle}>Education</div>

          <div style={text}>
            2024 - Present: B.Tech in Computer Science (AI/ML) (Grade: 8.5+)
          </div>

          <div style={text}>
            2022-2024 : Intermediate (Grade: 75%)
          </div>

          <div style={text}>
            2020-2022 : High School (Grade: 94%)
          </div>

          {/*<div style={text}>
            🚀 Goal: Become AI Engineer within 1 year
          </div>*/}
        </div>

        {/* PROJECTS */}
        <div>
          <div style={sectionTitle}>Projects</div>

          <div style={{ display: "grid", gap: "12px" }}>
            {projects.map((project) => (
              <div
                key={project.title}
                style={projectCard}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <b style={{ color: palette.ink }}>{project.title}</b>
                <p style={text}>{project.description}</p>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={linkStyle}
                >
                  View GitHub Repo
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <div style={sectionTitle}>Contact</div>
          {/* TODO: update email/linkedin/github in `profileData` above. */}
          <p style={text}>
            📧{" "}
            <a href={`mailto:${profileData.email}`} style={linkStyle}>
              Gmail
            </a>
          </p>
          <p style={text}>
            🔗{" "}
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>
              Linkedin
            </a>
          </p>
          <p style={text}>
            💻{" "}
            <a href={profileData.github} target="_blank" rel="noreferrer" style={linkStyle}>
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
