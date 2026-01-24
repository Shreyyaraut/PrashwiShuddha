import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('media/images/About.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "94vh",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col text-center text-md-start">
            <h1
              className="fw-bold"
              style={{ fontSize: "10vw", maxWidth: "100%", lineHeight: "1.2" }}
            >
              About
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
