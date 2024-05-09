import Text from "../components/Text";
import MyInfo from "../components/MyInfo";
import "../css/main.css";


export default function HomeContent() {
  return (
    <div>
      <MyInfo />

      <h2>About me !!</h2>
      <div className="text">{Text.aboutMe}</div>
      <br />
      <div>
        <a href="/portfolio">Check out my portfolio 🡢 </a>
      </div>
      <div>
        <a href="/connor-brackley-cv.pdf" target="_blank" rel="noreferrer">
          Download my resume 🡢{" "}
        </a>
      </div>

      <h2>My skills !!</h2>
      <h2>My academic work !!</h2>
      <div>
        <div className="text">{Text.academicWork}</div>
        <br />
        <div>
          <a
            href="https://scholar.google.com/citations?user=uuAhl_QAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            See my publications 🡢
          </a>
        </div>
      </div>
    </div>
  );
}
