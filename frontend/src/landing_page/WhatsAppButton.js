import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919923071433"
      rel="Whatsapp"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: 9999,
      }}
    >
      <img
        src="/media/images/Wplogo.png"
        alt="WhatsApp"
        style={{ width: "50px", height: "50px" }}
      />
    </a>
  );
};

export default WhatsAppButton;
