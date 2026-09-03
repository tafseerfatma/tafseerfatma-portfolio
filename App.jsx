import { useEffect, useMemo } from "react";

const projects = [
  {
    number: "01",
    title: "To Do App",
    description:
      "A task manager built with vanilla JavaScript, featuring add, complete, and delete functionality with persistent storage.",
    tags: ["JavaScript", "LocalStorage"],
  },
  {
    number: "02",
    title: "PDF Jack",
    description:
      "A versatile Python-based tool that performs a wide range of operations on PDF documents, from merging and splitting to extracting text and manipulating metadata.",
    tags: ["Python", "PDF tools"],
  },
  {
    number: "03",
    title: "Intrusion Detection System",
    description:
      "A network security tool designed to identify and respond to potential threats in real-time, utilizing machine learning algorithms for anomaly detection.",
    tags: ["Python", "Machine Learning", "Security"],
  },
];

function CodeBackground() {
  const streams = useMemo(() => {
    const characters = "01{}[]<>/$#;:+=ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array.from({ length: 24 }, (_, index) => {
      const text = Array.from(
        { length: 12 + Math.floor(Math.random() * 20) },
        () => characters[Math.floor(Math.random() * characters.length)],
      ).join("\n");

      return {
        id: index,
        text,
        left: `${index * 4.4 + Math.random() * 2}%`,
        duration: `${12 + Math.random() * 18}s`,
        delay: `${-Math.random() * 20}s`,
      };
    });
  }, []);

  return (
    <div className="code-field" aria-hidden="true">
      {streams.map((stream) => (
        <span
          className="code-stream"
          key={stream.id}
          style={{
            left: stream.left,
            animationDuration: stream.duration,
            animationDelay: stream.delay,
          }}
        >
          {stream.text}
        </span>
      ))}
    </div>
  );
}

function TerminalCard() {
  return (
    <div className="terminal-card">
      <div className="terminal-dots">
        <i />
        <i />
        <i />
      </div>
      <pre>
        <span className="syntax-key">const</span> developer = {"{\n"}
        {"  "}
        <span className="syntax-key">name</span>:{" "}
        <span className="syntax-value">"Tafseer Fatma"</span>,{"\n"}
        {"  "}
        <span className="syntax-key">focus</span>: [{"\n"}
        {"    "}
        <span className="syntax-value">"web apps"</span>,{"\n"}
        {"    "}
        <span className="syntax-value">"automation"</span>,{"\n"}
        {"    "}
        <span className="syntax-value">"security"</span>
        {"\n  "}],{"\n"}
        {"  "}
        <span className="syntax-key">status</span>:{" "}
        <span className="syntax-green">"open_to_build"</span>
        {"\n"}{"}"};
      </pre>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className="project-number">[{project.number}]</div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <div className="project-year">{project.year}</div>
        <p>{project.description}</p>
      </div>
      <div className="project-meta">
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <span className="project-arrow">↗</span>
      </div>
    </article>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Developer Portfolio — Terminal Mode";
  }, []);

  return (
    <>
      <CodeBackground />
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />

      <header className="site-header shell">
        <a className="brand" href="#top">
          portfolio
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow">
              $ whoami <span>→ software developer</span>
            </div>
            <h1>
              Hi, I am{" "}
              <span className="accent">Tafseer Fatma</span>
            </h1>
            <p className="hero-description">
                 Full-stack developer | JavaScript | React.js| Python |Node.js | Next.js | Express | SQL | MySQL | MongoDB | HTML | CSS
            </p>
            <div className="actions">
              <a className="button" href="#work">
                view my work ↘
              </a>
              <a className="button button-secondary" href="#contact">
                start a conversation
              </a>
            </div>
          </div>
          <TerminalCard />
        </section>

        <section className="section shell" id="work">
          <div className="section-heading">
            <small>[01]</small>
            <h2>selected work</h2>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="section-heading">
            <small>[02]</small>
            <h2>about the developer</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I like building software that feels direct: clear purpose,
                useful details, and no unnecessary friction. My work sits at
                the intersection of web development, automation, and security.
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>03</strong>
                <span>featured projects</span>
              </div>
              <div className="stat">
                <strong>∞</strong>
                <span>things left to build</span>
              </div>
              <div className="stat">
                <strong>01</strong>
                <span>terminal-inspired site</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>curiosity mode</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" id="contact">
          <div className="contact">
            <div>
              <div className="eyebrow">$ ./connect.sh</div>
              <h2>Have an idea worth shipping?</h2>
            </div>
            <a className="button" href="mailto:your.tafseerr2000@gmail.com">
              say hello ↗
            </a>
            <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/tafseerr"
                target="_blank"
                rel="noreferrer"
              >
                linkedin ↗
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/tafseerfatma"
                target="_blank"
                rel="noreferrer"
              >
                github ↗
              </a>

          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <span>© 2026 Tafseer Fatma</span>
        <span>built with React · styled with intent</span>
      </footer>
    </>
  );
}