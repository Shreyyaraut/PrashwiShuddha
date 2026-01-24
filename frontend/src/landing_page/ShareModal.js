import React from "react";
import "./shareModal.css";

function ShareModal({ item, onClose }) {
  const productUrl =
    window.location.origin + `/products/${item.slug}`;

  const copyLink = () => {
    navigator.clipboard.writeText(productUrl);
    alert("Link copied!");
  };

  return (
    <div className="share-overlay">
      <div className="share-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <h3>Share this product with friends</h3>

        <div className="share-icons">
          <a href={`mailto:?body=${productUrl}`} target="_blank">📧<span>Email</span></a>
          <a href={`https://pinterest.com/pin/create/button/?url=${productUrl}`} target="_blank"><i class="fa fa-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl}`} target="_blank">📘<span>Facebook</span></a>
          <a href={`https://twitter.com/intent/tweet?url=${productUrl}`} target="_blank">❌<span>X</span></a>
          <a href={`https://api.whatsapp.com/send?text=${productUrl}`} target="_blank">🟢<span>WhatsApp</span></a>

          {/* Instagram → copy link */}
          <div className="insta-share" onClick={copyLink}>
            📸<span>Instagram</span>
          </div>
        </div>

        <div className="share-link">
          <input value={productUrl} readOnly />
          <button onClick={copyLink}>Copy Link</button>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
