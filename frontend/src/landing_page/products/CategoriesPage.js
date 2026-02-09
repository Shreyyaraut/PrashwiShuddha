import React from "react";
import { Link, useNavigate } from "react-router-dom";

const category = [
  {
    id: 1,
    slug: "ubtan-honey-natural-exfoliating-soap",
    title: "Ubtan Honey Natural Exfoliating Soap – 100g",
    price: "₹149.00",
    mrp: "₹299.00",
    image: "/media/images/Ubtan.webp",
    size: 100,
    unit: "g",
  },
  {
    id: 2,
    slug: "neem-basil-natural-detox-soap",
    title: "Neem Basil Natural Detox Soap – 100g",
    price: "₹149.00",
    mrp: "₹299.00",
    image: "/media/images/Neem.webp",
    size: 100,
    unit: "g",
  },
  {
    id: 3,
    slug: "almond-milk-saffron-radiance-soap",
    title: "Almond Milk Saffron Radiance & Moisturizer Soap – 100g",
    price: "₹149.00",
    mrp: "₹299.00",
    image: "/media/images/Almond.webp",
    size: 100,
    unit: "g",
  },
  {
    id: 4,
    slug: "sandal-turmeric-vitamin-c-soap",
    title: "Sandal Turmeric Vitamin C Soap – 100g",
    price: "₹149.00",
    mrp: "₹299.00",
    image: "/media/images/Sandal.webp",
    size: 100,
    unit: "g",
  },
  {
    id: 5,
    slug: "coconut-cream-deep-moisturizer-soap",
    title: "Coconut Cream Deep Moisturizer Soap – 100g",
    price: "₹149.00",
    mrp: "₹299.00",
    image: "/media/images/Coconut.webp",
    size: 100,
    unit: "g",
  },
  {
    id: 6,
    slug: "white-blossom-pure-brightening-soap",
    title: "White Blossom Pure Brightening Soap – 100g",
    price: "₹149.00",
    mrp: "₹299.00",
    image: "/media/images/White.webp",
    size: 100,
    unit: "g",
  },
];

function CategoriesPage() {
  const navigate = useNavigate();

  const handleAddToCart = (e, item) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItem = {
      id: item.id,
      slug: item.slug,
      title: item.title,
      image: item.image,
      size: item.size, // ✅ FIX
      unit: item.unit, // ✅ FIX
      qty: 1,
      price: item.price,
      mrp: item.mrp,
    };

    const existingIndex = cart.findIndex(
      (c) => c.id === item.id && c.size === item.size,
    );

    if (existingIndex !== -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <section id="categories" className="category-section">
      <div className="container category-page">
        <h1
          className="category-heading"
          style={{ fontWeight: "700", color: "#552d61" }}
        >
          Everyday Nourishment – Body Wash, Bars, Hand Care & More
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

export default CategoriesPage;
