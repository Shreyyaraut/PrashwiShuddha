import React, {useState } from "react";
// import React, { useState, useEffect } from "react";

const images = [
  "media/images/Background.png",
  "media/images/SoapBg.webp",
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % images.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="hero-container">
      <img
        src={images[currentIndex]}
        alt="Hero Banner"
        className="hero-image"
      />

      {currentIndex === 0 && (
        <div className="hero-text">
          <h1>Prashwi</h1>
          <h2>Shuddha</h2>
        </div>
      )}

      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
