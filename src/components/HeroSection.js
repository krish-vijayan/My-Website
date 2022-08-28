import React from "react";
import "./HeroSection.css";
import "../App.css";
import ParticlesBackground from "./ParticlesBackground";

function HeroSection() {
  return (
    <>
      <div className="particles">
        <ParticlesBackground />
      </div>

      <div className="hero-container">
        {/* <video src="/videos/bAw_w1.mp4" autoPlay loop muted />  */}
        <h1>Krish Vijayan</h1>
        <p> 2A Mechatronics Engineering Student</p>

        <img src="/images/pfp.jpg" className="pfp" />
      </div>
    </>
  );
}

export default HeroSection;
