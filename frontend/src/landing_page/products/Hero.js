import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { title: "ALL Products", img: "media/images/webLogo.png", id: null },
  { title: "SKIN CARE", img: "media/images/SkinImg.jpg", id: "skincare" },
  { title: "BODY CARE", img: "media/images/BathingImg.jpg", id: "categories" },
  { title: "HAIR CARE", img: "media/images/HaircareImg.jpg", id: "haircare" },
  { title: "MAKEUP", img: "media/images/MakeupImg.jpg", id: "makeup" },
];

function Hero() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/products");

    setTimeout(() => {
      if (id) {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="homeproduct-section" style={{ marginTop: "85px" }}>
      <div className="homeproduct-grid">
        {products.map((item, index) => (
          <div
            className="homeproduct-card"
            key={index}
            onClick={() => handleClick(item.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.img} alt={item.title} />
            <h3>
              {item.title}
              <span> →</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
