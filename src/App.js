import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyInfo from "./components/MyInfo";
import Tabs from "./components/Tabs";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound";
import "./css/main.css";
import "./css/startup.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");

    if (visited) {
      setHasVisited(true);
      setShowContent(true);
    } else {
      const typewriter = document.querySelector(".typewriter");

      const handleAnimationEnd = () => {
        setShowContent(true);
        sessionStorage.setItem("hasVisited", "true");
      };

      typewriter.addEventListener("animationend", handleAnimationEnd);

      return () => {
        typewriter.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, []);

  return (
      <html>
        <body className="main">
          <div className={`main-container`}>
            <div>
              <h1 className={`typewriter ${hasVisited ? "no-animation" : ""}`}>
                Hello :) and welcome !!
              </h1>
            </div>
            <div
              className={`fade-in-section ${showContent ? "is-visible" : ""} ${
                hasVisited ? "no-animation" : ""
              }`}
            >
              <BrowserRouter>
                <MyInfo />
                <Tabs />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </body>
      </html>
  );
}

export default App;
