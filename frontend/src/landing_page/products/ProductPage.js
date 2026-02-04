import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
// import reviews from "./Reviews";

const category = [
  {
    id: 1,
    slug: "ubtan-honey-natural-exfoliating-soap",
    title: "Ubtan Honey Natural Exfoliating Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 149,
      2: 220,
      3: 300,
    },
    images: [
      "/media/images/Ubtan.webp",
      "/media/images/UbtanSoap.webp",
      "/media/images/UbtanIngr.webp",
    ],
    description:
      "Try the Ubtan Honey Natural Exfoliating Soap Bar. Available in packs of 2 and 3, this ubtan soap bar leaves your skin softer, smoother, and healthier-looking.",
  },

  {
    id: 2,
    slug: "neem-basil-natural-detox-soap",
    title: "Neem Basil Natural Detox Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 149,
      2: 220,
      3: 300,
    },
    images: [
      "/media/images/Neem.webp",
      "/media/images/NeemSoap.webp",
      "/media/images/NeemIngr.webp",
    ],
    description:
      "Try the Neem Basil Natural Detox Soap Bar. Available in a packs of 2 and 3, this neem basil soap bar leaves your skin softer, smoother, and healthier-looking.",
  },
  {
    id: 3,
    slug: "almond-milk-saffron-radiance-soap",
    title: "Almond Milk Saffron Radiance & Moisturizer Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 149,
      2: 220,
      3: 300,
    },
    images: [
      "/media/images/Almond.webp",
      "/media/images/AlmondSoap.webp",
      "/media/images/AlmondIngr.webp",
    ],
    description:
      "Try the Almond Milk Saffron Radiance & Moisturizer Soap Bar. Available in a packs of 2 and 3, this almond milk and saffron soap bar leaves your skin softer, smoother, and healthier-looking.",
  },
  {
    id: 4,
    slug: "sandal-turmeric-vitamin-c-soap",
    title: "Sandal Turmeric Vitamin C Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 149,
      2: 220,
      3: 300,
    },
    images: [
      "/media/images/Sandal.webp",
      "/media/images/SandalSoap.webp",
      "/media/images/SandalIngr.webp",
    ],
    description:
      "Try the Sandal Turmeric Vitamin C Soap Bar. Available in a packs of 2 and 3, this sandalwood and turmeric soap bar leaves your skin softer, smoother, and healthier-looking.",
  },
  {
    id: 5,
    slug: "coconut-cream-deep-moisturizer-soap",
    title: "Coconut Cream Deep Moisturizer Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 149,
      2: 220,
      3: 300,
    },
    images: [
      "/media/images/Coconut.webp",
      "/media/images/CoconutSoap.webp",
      "/media/images/CoconutIngr.webp",
    ],
    description:
      "Try the Coconut Cream Deep Moisturizer Soap Bar. Available in a packs of 2 and 3, this coconut cream soap bar leaves your skin softer, smoother, and healthier-looking.",
  },
  {
    id: 6,
    slug: "white-blossom-pure-brightening-soap",
    title: "White Blossom Pure Brightening Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 149,
      2: 220,
      3: 300,
    },
    images: [
      "/media/images/White.webp",
      "/media/images/WhiteSoap.webp",
      "/media/images/WhiteIngr.webp",
    ],
    description:
      "Try the White Blossom Pure Brightening Soap Bar. Available in a packs of 2 and 3, this white blossom soap bar leaves your skin softer, smoother, and healthier-looking.",
  },
  {
    id: 7,
    slug: "spotless-glow-face-wash",
    title:
      "Spotless Glow Face Wash with Vitamin C, Niacinamide & Liquorice Extract – 120ml",
    size: 120,
    unit: "ml",
    price: "₹175.00",
    images: ["/media/images/Facewash1.webp", "/media/images/Facewash.webp"],
    description:
      "Try the Spotless Glow Face Wash with Vitamin C, Niacinamide & Liquorice Extract. Available in a pack of 1, Designed for daily use, the Spotless Glow Face Wash cleanses impurities while helping improve skin texture and radiance, leaving your skin soft, smooth, and refreshed.",
  },
  {
    id: 8,
    slug: "rosemary-hair-growth-oil",
    title: "Rosemary Hair Growth Oil – 120ml",
    size: 120,
    unit: "ml",
    price: "₹230.00",
    images: ["/media/images/Rosemary.webp", "/media/images/Hairoil.webp"],
    description:
      "Try Rosemary Hair Growth Oil. Available in a pack of 1, this hair oil nourishes the scalp and helps promote stronger, healthier hair growth.",
  },
  {
    id: 9,
    slug: "amla–rosemary-hair-fall-control-shampoo",
    title: "Amla – Rosemary Hair Fall Control Shampoo – 200ml",
    size: 200,
    unit: "ml",
    price: "₹185.00",
    images: ["/media/images/Amlarosemary.webp", "/media/images/Shampo.webp"],
    description:
      "Try the Amla – Rosemary Hair Fall Control Shampoo. Available in a pack of 1, this shampoo gently cleanses while helping reduce hair fall and strengthen your hair.",
  },
  {
    id: 10,
    slug: "intense-hair-repair-&-smooth-shampoo",
    title: "Intense Hair Repair & Smooth Shampoo – 200ml",
    size: 200,
    unit: "ml",
    price: "₹162.00",
    images: [
      "/media/images/Intenseshampoo.webp",
      "/media/images/Hairrepair.webp",
    ],
    description:
      "Try the Intense Hair Repair & Smooth Shampoo. Available in a pack of 1, this shampoo repairs damaged hair while leaving it smooth and healthy.",
  },
  {
    id: 11,
    slug: "intense-moisture-repair-conditioner",
    title: "Intense Moisture Repair Conditioner – 200ml",
    size: 200,
    unit: "ml",
    price: "₹198.00",
    images: [
      "/media/images/Intenseconditioner.webp",
      "/media/images/Conditioner.webp",
    ],
    description:
      "Try the Intense Moisture Repair Conditioner. Available in a pack of 1, this conditioner deeply nourishes and repairs your hair, leaving it soft and hydrated.",
  },
  {
    id: 12,
    slug: "hydrating-lib-balm",
    title: "Hydrating Lib Balm – 10g",
    size: 10,
    price: "₹85.00",
    images: ["/media/images/Lipbalm.webp", "/media/images/Lipbalm.webp"],
    description:
      "Try the Hydrating Lip Balm. Available in a pack of 1, this balm nourishes and moisturizes your lips, leaving them soft and smooth.",
  },
];

const CUSTOMER_NAMES = [
  "Niraj",
  "Nupura",
  "Swarup",
  "Shreya",
  "Riya",
  "Shubham",
  "Sneha",
  "Dipashri",
  "Pooja",
  "Swara",
  "Neha",
  "Vikram",
  "Isha",
  "Rohit",
  "Kavya",
  "Amit",
  "Anjali",
  "Shivani",
  "Manisha",
  "Yogita",
  "Mansi",
  "Prajakta",
  "Prapti",
  "Priyanka",
  "Nitu",
  "Nikita",
  "Khushi",
  "Siya",
  "Tejal",
  "Juhi",
  "Ayushi",
  "Tanvi",
  "Anuradha",
  "Kashish",
  "Asmita",
  "Smita",
  "Trupti",
  "Rasika",
  "Vamika",
  "Vedant",
  "Aachal",
  "Tara",
  "Shreyas",
  "Jahnvi",
  "Sejal",
  "Yukta",
  "Ankita"
];

const getRandomCustomerName = () => {
  return CUSTOMER_NAMES[Math.floor(Math.random() * CUSTOMER_NAMES.length)];
};

function ProductPage() {
  const { slug } = useParams();
  const product = category.find((item) => item.slug === slug);
  const getReviewStorageKey = (slug) => `product_reviews_${slug}`;

  const [productReviews, setProductReviews] = useState(() => {
    const saved = localStorage.getItem(getReviewStorageKey(slug));

    if (saved) {
      return JSON.parse(saved);
    }

    return {
      rating: 0,
      totalReviews: 0,
      verifiedBuyers: "0",
      breakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      reviews: [],
    };
  });

  const [current, setCurrent] = useState(0);
  const [pack, setPack] = useState(1);

  useEffect(() => {
    if (!slug) return;

    localStorage.setItem(
      getReviewStorageKey(slug),
      JSON.stringify(productReviews),
    );
  }, [productReviews, slug]);

  const startX = useRef(0);

  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState("");

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  const handleStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;

    const diff = startX.current - endX;

    if (diff > 60 && current < product.images.length - 1) {
      setCurrent(current + 1);
    } else if (diff < -60 && current > 0) {
      setCurrent(current - 1);
    }
  };

  const showPackOptions = product.pricing;

  const getPrice = () => {
    if (showPackOptions) {
      return `₹${product.pricing[pack]}.00`;
    }
    return product.price || `₹${product.pricing?.[1]}.00`;
  };

  const buyNowOnWhatsApp = () => {
    const phoneNumber = "919923071433";

    const quantity = showPackOptions ? pack : 1;

    const price = showPackOptions
      ? product.pricing[pack]
      : parseInt(product.price.replace("₹", ""));

    const message = `
Hello, I want to buy this product:

Product: ${product.title}
Size: ${product.size}${product.unit}
Quantity: ${quantity}
Price: ₹${price}.00

Product Link:
${window.location.href}

Please confirm availability. Thank you!
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // Add a new review & update rating, breakdown etc.
  const addReview = () => {
    if (!newText.trim()) return;

    const newReview = {
      id: Date.now(),
      rating: newRating,
      text: newText.trim(),
      user: getRandomCustomerName(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    const newBreakdown = { ...productReviews.breakdown };
    newBreakdown[newRating] = (newBreakdown[newRating] || 0) + 1;

    const newTotalReviews = productReviews.totalReviews + 1;

    let totalScore = 0;
    for (const [star, count] of Object.entries(newBreakdown)) {
      totalScore += Number(star) * count;
    }
    const newRatingAvg = +(totalScore / newTotalReviews).toFixed(1);

    setProductReviews({
      ...productReviews,
      reviews: [newReview, ...productReviews.reviews],
      breakdown: newBreakdown,
      totalReviews: newTotalReviews,
      rating: newRatingAvg,
    });

    setNewText("");
    setNewRating(5);
  };

  return (
    <div className="container product-page">
      <div className="product-layout">
        {/* LEFT IMAGE SECTION */}
        <div className="image-section">
          <div
            className="main-image-wrapper"
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
          >
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {product.images.map((img, idx) => (
                <div className="slide" key={idx}>
                  <div className="image-bg">
                    <img
                      src={img}
                      alt=""
                      className="main-image"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="thumbnail-row">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={`thumb ${idx === current ? "active" : ""}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="details-section">
          <h1>{product.title}</h1>

          {/* {productReviews && (
            <div className="rating">
              {"★".repeat(Math.round(productReviews.rating))}{" "}
              <span>Read {productReviews.totalReviews} reviews</span>
            </div>
          )} */}
          <br />

          <div className="pack-options">
            {showPackOptions && (
              <div className="pack-options">
                <button
                  className={pack === 1 ? "active" : ""}
                  onClick={() => setPack(1)}
                >
                  1 x 100{product.unit}
                </button>

                <button
                  className={pack === 2 ? "active" : ""}
                  onClick={() => setPack(2)}
                >
                  2 x 100{product.unit}
                </button>

                <button
                  className={pack === 3 ? "active" : ""}
                  onClick={() => setPack(3)}
                >
                  3 x 100{product.unit}
                </button>
              </div>
            )}
          </div>

          <p>{product.description}</p>

          <h4 className="price">{getPrice()}</h4>

          <button className="buy-btn" onClick={buyNowOnWhatsApp}>
            Buy Now
          </button>

          {productReviews && (
            <div className="reviews-section">
              <h2>Ratings & Reviews</h2>

              <div className="reviews-top">
                <div className="rating-summary">
                  <h1>{productReviews.rating} ★</h1>
                  <p>{productReviews.verifiedBuyers} Verified Buyers</p>
                </div>

                <div className="rating-bars">
                  {Object.entries(productReviews.breakdown)
                    .sort((a, b) => b[0] - a[0])
                    .map(([star, count]) => {
                      const percentage =
                        (count / productReviews.totalReviews) * 100;

                      return (
                        <div className="rating-bar" key={star}>
                          <span>{star}★</span>
                          <div className="bar">
                            <div
                              className="fill"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="count">{count}</span>
                        </div>
                      );
                    })}
                </div>
              </div>

              <h3>Customer Reviews ({productReviews.totalReviews})</h3>
              {productReviews.reviews.map((rev) => (
                <div className="single-review" key={rev.id}>
                  <span className="review-rating">{rev.rating}★</span>
                  <p>{rev.text}</p>
                  <small>
                    {rev.user} | {rev.date}
                  </small>
                </div>
              ))}

              {/* Add Review Form */}
              {/* Add Review Form */}
              <div className="add-review">
                <h3>Add a Review</h3>

                <label>Rating</label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= newRating ? "filled" : ""}`}
                      onClick={() => setNewRating(star)}
                      role="button"
                      aria-label={`${star} Star`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <label>Write a review</label>
                <textarea
                  className="review-textarea"
                  placeholder="Help others by sharing your review."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />

                <button className="submit-review-btn" onClick={addReview}>
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
