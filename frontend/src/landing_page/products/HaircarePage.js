import React from "react";
import { Link, useNavigate } from "react-router-dom";

const category = [
  {
    id: 8,
    slug: "rosemary-hair-growth-oil",
    title: "Rosemary Hair Growth Oil – 120ml",
    price: "₹230.00",
    mrp: "₹459.00",
    image: "/media/images/I3.jpeg",
    size: 120,
    unit: "ml",
  },
  {
    id: 9,
    slug: "amla–rosemary-hair-fall-control-shampoo",
    title: "Amla – Rosemary Hair Fall Control Shampoo – 200ml",
    price: "₹185.00",
    mrp: "₹369.00",
    image: "/media/images/I10.jpeg",
    size: 200,
    unit: "ml",
  },
  {
    id: 10,
    slug: "intense-hair-repair-&-smooth-shampoo",
    title: "Intense Hair Repair & Smooth Shampoo – 200ml",
    price: "₹162.00",
    mrp: "₹324.00",
    image: "/media/images/I11.jpeg",
    size: 200,
    unit: "ml",
  },
  {
    id: 11,
    slug: "intense-moisture-repair-conditioner",
    title: "Intense Moisture Repair Conditioner – 200ml",
    price: "₹198.00",
    mrp: "₹396.00",
    image: "/media/images/I12.jpeg",
    size: 200,
    unit: "ml",
  },
];

function HaircarePage() {
  const navigate = useNavigate();
  
    const handleAddToCart = (e, item) => {
      e.preventDefault(); // stop product page navigation
  
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
  
      navigate("/cart");
    }
  return (
    <section id="haircare" className="category-section">
    <div className="container category-page">
      <h1
        className="category-heading"
        style={{ fontWeight: "700", color: "#552d61" }}
      >
        Everyday Hair Care – For Strong, Healthy Hair
      </h1>

      <div className="category-grid">
        {category.map((item) => (
          <Link
            to={`/products/${item.slug}`}
            className="category-card"
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="category-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="category-info">
              <p className="category-title">{item.title}</p>

              <div className="category-bottom">
                <div className="category-pricebox">
                  <span className="category-price">{item.price}</span>
                  <div className="mrp-row">
  M.R.P.: <span className="mrp">{item.mrp}</span>
</div>

                  </div>
                <button
                    className="add-btn"
                    onClick={(e) => handleAddToCart(e, item)}
                  >
                    Add to cart
                  </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
}

export default HaircarePage;
