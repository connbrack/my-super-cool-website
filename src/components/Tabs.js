import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
import "../css/tabs.css";

export default function Tabs() {
  const location = useLocation();

  return (
    
    <div className="tabs">
      <ul>
        <li>
          <Link to="/" className={`tab-link ${location.pathname === "/" ? "active" : ""}`}>HOME</Link>
        </li>
        <li>
          <Link to="/experience" className={`tab-link ${location.pathname === "/experience" ? "active" : ""}`}>EXPERIENCE</Link>
        </li>
        <li>
          <Link to="/portfolio" className={`tab-link ${location.pathname === "/portfolio" ? "active" : ""}`}>PORTFOLIO</Link>
        </li>
      </ul>
    </div>
  );
}
