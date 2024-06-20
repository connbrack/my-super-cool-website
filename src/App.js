import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyInfo from "./components/MyInfo";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./css/main.css";
import "./css/startup.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const typewriter = document.querySelector(".typewriter");
    typewriter.addEventListener("animationend", () => {
      setTimeout(() => {
        setShowContent(true);
      });
    });
    return () => {
      typewriter.removeEventListener("animationend", () => {
        setShowContent(true);
      });
    };
  }, []);
  return (
    <html>
      <body className="main">
        <div className="main-container">
          <div>
            <h1 className="typewriter">Hello :) and welcome !!</h1>
          </div>
          <div className={`fade-in-section ${showContent ? "is-visible" : ""}`}>
            <BrowserRouter>
              <MyInfo />
              <Routes>
                <Route path="/" element={<Home />} />
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
