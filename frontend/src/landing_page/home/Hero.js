// import React, {useState } from "react";
// // import React, { useState, useEffect } from "react";

// const images = [
//   "media/images/Background.png",
//   "media/images/SoapBg.webp",
// ];

// function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setCurrentIndex((prev) => (prev + 1) % images.length);
//   //   }, 5000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <div className="hero-container">
//       <img
//         src={images[currentIndex]}
//         alt="Hero Banner"
//         className="hero-image"
//       />

//       {currentIndex === 0 && (
//         <div className="hero-text">
//           <h1>Prashwi</h1>
//           <h2>Shuddha</h2>
//         </div>
//       )}

//       <div className="hero-dots">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={index === currentIndex ? "dot active" : "dot"}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useState, useRef } from "react";

const images = [
  "media/images/Background.png",
  "media/images/SoapBg.webp",
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);

  /* 👉 SWIPE START (same as product page) */
  const handleStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  /* 👉 SWIPE END */
  const handleEnd = (e) => {
    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;

    const diff = startX.current - endX;

    if (diff > 60 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (diff < -60 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="hero-container">
      <img
        src={images[currentIndex]}
        alt="Hero Banner"
        className="hero-image"
        draggable={false}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
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

