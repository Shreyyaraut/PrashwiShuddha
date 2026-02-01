import React, { useEffect, useState } from "react";
import ShareModal from "./ShareModal";

function Hero() {
  const [cart, setCart] = useState([]);
  const [shareItem, setShareItem] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];

    // ✅ ensure qty, size, unit always exist
    const normalized = stored.map((item) => ({
      ...item,
      qty: item.qty || 1,
      size: item.size || "",   // 👈 fallback
      unit: item.unit || "",   // 👈 fallback
    }));

    setCart(normalized);
  }, []);

  const changeQty = (index, value) => {
    const updated = [...cart];
    updated[index].qty = Math.max(1, updated[index].qty + value);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + parseInt(item.price.replace("₹", "")) * item.qty,
    0
  );

  const buyNowOnWhatsApp = () => {
  if (cart.length === 0 || subtotal === 0) {
    alert("Your cart is empty. Please add items before buying.");
    return;
  }

  const phoneNumber = "919923071433";
  let message = "Hello, I want to place an order:\n\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.title}\n`;
    message += `   Size: ${
      item.size ? `${item.size} ${item.unit}` : "N/A"
    }\n`;
    message += `   Quantity: ${item.qty}\n`;
    message += `   Price: ₹${
      parseInt(item.price.replace("₹", "")) * item.qty
    }\n\n`;
  });

  message += `Subtotal: ₹${subtotal}.00\n\n`;
  message += "Please confirm availability. Thank you!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};


  return (
    <div className="cart-page">
      <div className="cart-left">
        <h1>Shopping Cart</h1>
        <div className="price-label">Price</div>

        {cart.map((item, index) => (
          <div className="cart-row" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="cart-details">
              <h2>{item.title}</h2>
              <p className="stock">In stock</p>

              <label className="gift">
                <input type="checkbox" /> This will be a gift
                <span> Learn more</span>
              </label>

              {/* ✅ FIXED SIZE DISPLAY */}
              <p className="size">
                Size:{" "}
                {item.size ? `${item.size} ${item.unit}` : "Not specified"}
              </p>

              <div className="cart-actions">
                <div className="qty-box">
                  <button onClick={() => changeQty(index, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => changeQty(index, 1)}>+</button>
                </div>

                <span className="link" onClick={() => deleteItem(index)}>
                  Delete
                </span>

                <span className="link" onClick={() => setShareItem(item)}>
                  Share
                </span>
              </div>
            </div>

            {/* ✅ FIXED className */}
            <div className="price-box">
            <div className="discount-badge">50% off</div>
              {/* <div class="deal-text">Limited time deal</div> */}
              <div className="price-row">
                <span className="selling-price">
                  ₹{parseInt(item.price.replace("₹", "")) * item.qty}.00
                </span>
              </div>

              <div className="mrp-row">
                M.R.P.: <span className="mrp">₹333.00</span>
              </div>
            </div>
          </div>
        ))}

        <div className="cart-subtotal-text">
          Subtotal ({cart.length} item): <b>₹{subtotal}.00</b>
        </div>
      </div>

      <div className="cart-right">
        {/* <p className="delivery">
          ✔ Your first order qualifies for <b>FREE Delivery</b>.
        </p> */}

        <h2>
          Subtotal ({cart.length} item): <b>₹{subtotal}.00</b>
        </h2>

        <label className="gift">
          <input type="checkbox" /> This order contains a gift
        </label>

        <button
  className="cartbuy-btn"
  onClick={buyNowOnWhatsApp}
  disabled={cart.length === 0 || subtotal === 0}
>
  Buy Now
</button>

      </div>

      {shareItem && (
        <ShareModal
          item={shareItem}
          onClose={() => setShareItem(null)}
        />
      )}
    </div>
  );
}

export default Hero;
