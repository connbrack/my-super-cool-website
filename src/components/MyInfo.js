import "../css/main.css";
import me from "../images/me.png";

export default function MyInfo() {
  return (
    <div className="row-container">
      <div className="row-item">
        <img
          src={me}
          height={250}
          auto
          alt="A pic of me! (but I didn't load)"
        />
      </div>
      <div className="row-item">
        <a
          href="https://github.com/connbrack/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="icon-github.svg" alt="GitHub Logo" className="icon-wiggle" />
          Github/connbrack
        </a>
        <a
          href="https://www.linkedin.com/in/connor-brackley/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="icon-linkedin.svg" alt="Linkedin Logo" className="icon" />
          LinkedIn/connorbrackley
        </a>
        <a
          href="https://scholar.google.com/citations?user=uuAhl_QAAAAJ"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="icon-googlescholar.svg"
            alt="Google Scholar Logo"
            className="icon"
          />
          Google Scholar
        </a>
        <a
          href="mailto:connor.brackley@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="icon-email.svg" alt="Email Logo" className="icon" />
          connor.brackley@gmail.com
        </a>
      </div>
    </div>
  );
}
