// import React from "react";

// function Hero() {
//   return (
//     <div
//       style={{
//         backgroundImage: "url('media/images/heroBg6.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         width: "100%",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "flex-start", // push content to upper side
//         justifyContent: "flex-start",
//         paddingTop: "80px", // space from top
//         paddingLeft: "80px", // space from left
//       }}
//     >
//       <div className="container">
//       <div className="row">

//         <h1
//           style={{
//             fontWeight: "bold",
//             color: "#552d61", // purple
//             fontSize: "5rem",
//             marginBottom: "0.5rem",
//           }}
//         >
//           PRASHWI
//         </h1>
//         <h2
//           style={{
//             color: "#e53f99", // pink
//             fontSize: "4rem",
//             fontWeight: "500",
//           }}
//         >
//           SHUDDHA
//         </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useState, useEffect } from "react";

const images = [
  "media/images/Background.png",
  "media/images/SoapBg.png"
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        paddingTop: "15vh",
        paddingLeft: "8vw",
        boxSizing: "border-box",
        transition: "background-image 0.2s ease-in-out",
        marginTop: "85px"
      }}
    >
      {/* TEXT – only for first image */}
      {currentIndex === 0 && (
  <>
    <h1
      style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: "600",
        color: "#552d61",
        fontSize: "clamp(3.8rem, 8vw, 7rem)",
        marginBottom: "0.2rem",
        letterSpacing: "1px",
        marginTop: "-25px",
      }}
    >
      Prashwi
    </h1>

    <h2
      style={{
        fontFamily: "'Dancing Script', cursive",
        color: "#e53f99",
        fontSize: "clamp(3.5rem, 8vw, 7rem)",
        fontWeight: "700",
        marginTop: "-10px"
      }}
    >
      Shuddha
    </h2>
  </>
)}


      {/* SLIDER DOTS */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor:
                currentIndex === index ? "#552d61" : "#ccc",
              transition: "background-color 0.2s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
