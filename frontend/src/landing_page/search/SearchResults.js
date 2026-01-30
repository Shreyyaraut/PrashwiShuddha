import React from "react";
import { useLocation, Link } from "react-router-dom";

/* ✅ SAME product data (you can later move this to a common file) */
const products = [
  {
    id: 1,
    slug: "ubtan-honey-natural-exfoliating-soap",
    title: "Ubtan Honey Natural Exfoliating Soap – 100g",
    price: "₹299.00",
    image: "/media/images/Ubtan.webp",
  },
  {
    id: 2,
    slug: "neem-basil-natural-detox-soap",
    title: "Neem Basil Natural Detox Soap – 100g",
    price: "₹299.00",
    image: "/media/images/Neem.webp",
  },
  {
    id: 3,
    slug: "almond-milk-saffron-radiance-soap",
    title: "Almond Milk Saffron Radiance & Moisturizer Soap – 100g",
    price: "₹299.00",
    image: "/media/images/Almond.webp",
  },
  {
    id: 4,
    slug: "sandal-turmeric-vitamin-c-soap",
    title: "Sandal Turmeric Vitamin C Soap – 100g",
    price: "₹299.00",
    image: "/media/images/Sandal.jpeg",
  },
  {
    id: 5,
    slug: "coconut-cream-deep-moisturizer-soap",
    title: "Coconut Cream Deep Moisturizer Soap – 100g",
    price: "₹299.00",
    image: "/media/images/Coconut.webp",  
  },
  {
    id: 6,
    slug: "white-blossom-pure-brightening-soap",
    title: "White Blossom Pure Brightening Soap – 100g",
    price: "₹299.00",
    image: "/media/images/White.webp",  
  },
  {
    id: 7,
    slug: "spotless-glow-face-wash",
    title: "Spotless Glow Face Wash with Vitamin C, Niacinamide & Liquorice Extract – 120ml",
    price: "₹349.00",
    image: "/media/images/Facewash1.webp",
  },
  {
    id: 8,
    slug: "rosemary-hair-growth-oil",
    title: "Rosemary Hair Growth Oil – 120ml",
    price: "₹459.00",
    image: "/media/images/Rosemary.webp",
  },
  {
    id: 9,
    slug: "amla–rosemary-hair-fall-control-shampoo",
    title: "Amla – Rosemary Hair Fall Control Shampoo – 200ml",
    price: "₹369.00",
    image: "/media/images/Amlarosemary.webp",
  },
  {
    id: 10,
    slug: "intense-hair-repair-&-smooth-shampoo",
    title: "Intense Hair Repair & Smooth Shampoo – 200ml",
    price: "₹324.00",
    image: "/media/images/Intenseshampoo.webp",
  },
  {
    id: 11,
    slug: "intense-moisture-repair-conditioner",
    title: "Intense Moisture Repair Conditioner – 200ml",
    price: "₹396.00",
    image: "/media/images/Intenseconditioner.webp",
  },
  {
    id: 12,
    slug: "hydrating-lib-balm",
    title: "Hydrating Lib Balm – 10g",
    price: "₹169.00",
    image: "/media/images/Lipbalm.webp",
  }
];

function SearchResults() {
  const query =
    new URLSearchParams(useLocation().search).get("query") || "";

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">
        Search results for{" "}
        <span style={{ color: "#6a1b9a" }}>{query}</span>
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                />

                <div className="card-body text-center">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="fw-bold">{product.price}</p>

                  {/* 🔥 LINKS TO YOUR EXISTING ProductPage */}
                  <Link
                    to={`/products/${product.slug}`}
                    className="btn btn-sm btn-outline-purple"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
