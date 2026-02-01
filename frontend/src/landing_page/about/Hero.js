import React from "react";

function Hero() {
  return (
    <div
      className="about-hero"
      style={{
        backgroundImage: "url('media/images/About.webp')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col text-center text-md-start">
            <h1 className="about-title">About Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
