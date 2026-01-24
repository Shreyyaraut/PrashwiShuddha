import React from "react";
import { Link, useNavigate } from "react-router-dom";

const category = [
  {
    id: 12,
    slug: "hydrating-lib-balm",
    title: "Hydrating Lib Balm – 10g",
    price: "₹85.00",
    image: "/media/images/I4.jpeg",
    size: 10,
    unit: "g",
  },
];

function MakeupPage() {
  const navigate = useNavigate();
    
      const handleAddToCart = (e, item) => {
        e.preventDefault(); // stop product page navigation
    
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    
        navigate("/cart");
      }
  return (
    <section id="makeup" className="category-section">
    <div className="container category-page">
      <h1
        className="category-heading"
        style={{ fontWeight: "700", color: "#552d61" }}
      >
        Everyday Makeup – Simple, Beautiful & Confident
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
                  <div class="mrp-row">
                    M.R.P.: <span class="mrp">₹169.00</span>
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

export default MakeupPage;
