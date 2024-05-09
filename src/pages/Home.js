import React, { useEffect, useState } from "react";
import HomeContent from "../components/HomeContent";
import "../css/main.css";
import "../css/startup.css";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const typewriter = document.querySelector(".typewriter");
    typewriter.addEventListener("animationend", () => {
      setTimeout(() => {
        setShowContent(true);
      },);
    });
    return () => {
      typewriter.removeEventListener("animationend", () => {
        setShowContent(true);
      });
    };
  }, []);
  return (
    <div>
      <div>
        <h1 className="typewriter">Hello :) welcome to my page !!</h1>
      </div>

      <div className={`fade-in-section ${showContent ? 'is-visible' : ''}`}>
        <HomeContent />
      </div>
    </div>
  );
}
