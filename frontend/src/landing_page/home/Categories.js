import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const CategoriesItems = [
    { src: "media/images/skinCare1.webp", hash: "skincare" },
    { src: "media/images/bodyCare1.webp", hash: "categories" },
    { src: "media/images/hairCare1.webp", hash: "haircare" },
    { src: "media/images/makeUp1.webp", hash: "makeup" },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('media/images/cat5.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <div className="container text-center text-black">
        <h1 className="mb-3">Shop by Categories</h1>
        <h6 style={{ lineHeight: "2" }}>
          Our products are designed for everyone
        </h6>

        <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 mt-5">
          {CategoriesItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/products#${item.hash}`)}
              className="bg-white rounded shadow"
              style={{
                width: "240px",
                height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "25px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={item.src}
                alt={`Category ${index + 1}`}
                style={{
                  width: "300px",
                  height: "250px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
