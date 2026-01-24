import React, { useState } from "react";

function ShareModal({ item, onClose }) {
  const productUrl =
    window.location.origin + `/products/${item.slug}`;

  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(productUrl);
      setCopied(true);

      // reset button text after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="share-overlay">
      <div className="share-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <h3>Share this product with friends</h3>

        <div className="share-icons">
          <a href={`mailto:?body=${productUrl}`} target="_blank" rel="noreferrer">
            <i className="fa fa-envelope" />
            <span>Email</span>
          </a>

          <a href={`https://pinterest.com/pin/create/button/?url=${productUrl}`} target="_blank" rel="noreferrer">
            <i className="fa fa-pinterest" style={{color: "#E60023"}}/>
            <span>Pinterest</span>
          </a>

          <a href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl}`} target="_blank" rel="noreferrer">
            <i className="fa fa-facebook-square" style={{color: "#1877F2"}}/>
            <span>Facebook</span>
          </a>

          <a href={`https://twitter.com/intent/tweet?url=${productUrl}`} target="_blank" rel="noreferrer">
            <i className="fa fa-twitter-square" style={{color: "#1DA1F2"}} />
            <span>X</span>
          </a>

          <a href={`https://api.whatsapp.com/send?text=${productUrl}`} target="_blank" rel="noreferrer">
            <i className="fa fa-whatsapp" style={{color: "#25D366"}} />
            <span>WhatsApp</span>
          </a>

          {/* Instagram → just copy */}
          <div className="insta-share" onClick={copyLink}>
            <i className="fa fa-instagram" style={{color: "#E1306C"}} />
            <span>Instagram</span>
          </div>
        </div>

        {/* Copy Link Section */}
        <div className="share-link">
          <input value={productUrl} readOnly />
          <button onClick={copyLink}>
            {copied ? "Link copied!" : "Copy Link"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
