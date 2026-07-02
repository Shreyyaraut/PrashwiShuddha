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
      1: 99,
      2: 189,
      3: 279,
    },
    images: [
      "/media/images/1UBTANHONEY.webp",
      "/media/images/2UBTANHONEY.webp",
      "/media/images/3UBTANHONEY.webp",
      "/media/images/4UBTANHONEY.webp",
      "/media/images/5UBTANHONEY.webp",
    ],
    description:
      "Experience radiant, refreshed skin with our Ubtan Honey Exfoliating Soap. Enriched with Honey, Turmeric, Wheatgerm Oil, and traditional herbal extracts, it gently exfoliates, deeply nourishes, and leaves your skin soft, smooth, and naturally glowing.",
  },

  {
    id: 2,
    slug: "neem-basil-natural-detox-soap",
    title: "Neem Basil Natural Detox Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 99,
      2: 189,
      3: 279,
    },
    images: [
      "/media/images/1NeemBasil.webp",
      "/media/images/2NeemBasil.webp",
      "/media/images/3NeemBasil.webp",
      "/media/images/4NeemBasil.webp",
      "/media/images/5NeemBasil.webp",
    ],
    description:
      "Purify and refresh your skin with our Neem Basil Natural Detox Soap. Enriched with Neem, Basil, Coconut Oil, and Wheatgerm Oil, it gently cleanses, detoxifies, controls excess oil, and leaves your skin soft, healthy, and refreshed.",
  },
  {
    id: 3,
    slug: "almond-milk-saffron-radiance-soap",
    title: "Almond Milk Saffron Radiance & Moisturizer Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 99,
      2: 189,
      3: 279,
    },
    images: [
      "/media/images/1AlmondMilkSaffron.webp",
      "/media/images/2AlmondMilkSaffron.webp",
      "/media/images/3AlmondMilkSaffron.webp",
      "/media/images/4AlmondMilkSaffron.webp",
      "/media/images/5AlmondMilkSaffron.webp",
    ],
    description:
      "Nourish and brighten your skin with our Almond Milk Saffron Soap. Enriched with Almond Milk, Almond Oil, Saffron Extract, and Wheatgerm Oil, it gently cleanses, deeply moisturizes, and leaves your skin soft, smooth, and naturally radiant.",
  },
  {
    id: 4,
    slug: "sandal-turmeric-vitamin-c-soap",
    title: "Sandal Turmeric Vitamin C Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 99,
      2: 189,
      3: 279,
    },
    images: [
      "/media/images/1Sandalturmarric.webp",
      "/media/images/2Sandalturmarric.webp",
      "/media/images/3Sandalturmarric.webp",
      "/media/images/4Sandalturmarric.webp",
      "/media/images/5Sandalturmarric.webp",
    ],
    description:
      "Brighten and refresh your skin with our Sandal Turmeric Vitamin C Soap. Enriched with Turmeric, Sandalwood, Orange Peel Extract, and Wheatgerm Oil, it gently cleanses, nourishes, and leaves your skin soft, radiant, and healthy-looking.",
  },
  {
    id: 5,
    slug: "coconut-cream-deep-moisturizer-soap",
    title: "Coconut Cream Deep Moisturizer Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 99,
      2: 189,
      3: 279,
    },
    images: [
      "/media/images/1CoconutCream.webp",
      "/media/images/2CoconutCream.webp",
      "/media/images/3CoconutCream.webp",
      "/media/images/4CoconutCream.webp",
      "/media/images/5CoconutCream.webp",
    ],
    description:
      "Deeply nourish and hydrate your skin with our Coconut Cream Deep Moisturizer Soap. Enriched with Coconut Cream, Shea Butter, Coconut Oil, and Wheatgerm Oil, it gently cleanses while leaving your skin soft, smooth, and naturally radiant.",
  },
  {
    id: 6,
    slug: "white-blossom-pure-brightening-soap",
    title: "White Blossom Pure Brightening Soap – 100g",
    size: 100,
    unit: "g",
    pricing: {
      1: 99,
      2: 189,
      3: 279,
    },
    images: [
      "/media/images/1whiteblossom.webp",
      "/media/images/2whiteblossom.webp",
      "/media/images/3whiteblossom.webp",
      "/media/images/4whiteblossom.webp",
      "/media/images/5whiteblossom.webp",
    ],
    description:
      "Reveal brighter, healthier-looking skin with our White Blossom Soap. Enriched with Niacinamide, Liquorice Extract, Lemon Oil, and Wheatgerm Oil, it gently cleanses, hydrates, and helps promote a naturally radiant complexion.",
  },
  {
    id: 7,
    slug: "spotless-glow-face-wash",
    title:
      "Spotless Glow Face Wash with Vitamin C, Niacinamide & Liquorice Extract – 120ml",
    size: 120,
    unit: "ml",
    price: "₹199.00",
    images: [
      "/media/images/1FaceWash.webp", 
      "/media/images/2FaceWash.webp",
      "/media/images/3FaceWash.webp",
      "/media/images/4FaceWash.webp",
      "/media/images/5FaceWash.webp",
    ],
    description:
      "Reveal fresh, glowing skin with Prashwi Shuddha Spotless Glow Face Wash. Enriched with Vitamin C, Niacinamide, and Liquorice Root Extract, it gently cleanses, brightens, hydrates, and promotes a healthy, even-looking complexion.",
  },
  {
    id: 8,
    slug: "rosemary-hair-growth-oil",
    title: "Rosemary Hair Growth Oil – 120ml",
    size: 120,
    unit: "ml",
    price: "₹249.00",
    images: [
      "/media/images/1RosemaryHairOil.webp", 
      "/media/images/2RosemaryHairOil.webp",
      "/media/images/3RosemaryHairOil.webp",
      "/media/images/4RosemaryHairOil.webp", 
      "/media/images/5RosemaryHairOil.webp", 
      "/media/images/6RosemaryHairOil.webp",  
    ],
    description:
      "Experience deep nourishment with our Rosemary Hair Growth Oil, enriched with 9 therapeutic oils. It hydrates the scalp, reduces dryness, adds shine, and promotes stronger, healthier-looking hair.",
  },
  {
    id: 9,
    slug: "amla–rosemary-hair-fall-control-shampoo",
    title: "Amla – Rosemary Hair Fall Control Shampoo – 200ml",
    size: 200,
    unit: "ml",
    price: "₹249.00",
    images: [
      "/media/images/1AmlaRosemaryHairShampoo.webp", 
      "/media/images/2AmlaRosemaryHairShampoo.webp",
      "/media/images/3AmlaRosemaryHairShampoo.webp",
      "/media/images/4AmlaRosemaryHairShampoo.webp",
      "/media/images/5AmlaRosemaryHairShampoo.webp",
      "/media/images/6AmlaRosemaryHairShampoo.webp",
    ],
    description:
      "Reduce hair fall and strengthen your hair with our Amla-Rosemary Hair Fall Control Shampoo. Enriched with Amla, Rosemary Oil, Shikakai, Bhringraj, Fenugreek, and Aloe Vera, it gently cleanses, nourishes the scalp, and promotes stronger, healthier-looking hair.",
  },
  {
    id: 10,
    slug: "intense-hair-repair-&-smooth-shampoo",
    title: "Intense Hair Repair & Smooth Shampoo – 200ml",
    size: 200,
    unit: "ml",
    price: "₹249.00",
    images: [
      "/media/images/1IntenseHairShampoo.webp",
      "/media/images/2IntenseHairShampoo.webp",
      "/media/images/3IntenseHairShampoo.webp",
      "/media/images/4IntenseHairShampoo.webp",
      "/media/images/5IntenseHairShampoo.webp",
      "/media/images/6IntenseHairShampoo.webp",
      "/media/images/7IntenseHairShampoo.webp",
    ],
    description:
      "Revitalize your hair with our Intense Hair Repair & Smooth Shampoo. Enriched with Amino Acid Complex 17, it gently cleanses, strengthens hair, reduces breakage, and leaves it soft, smooth, and healthy-looking.",
  },
  {
    id: 11,
    slug: "intense-moisture-repair-conditioner",
    title: "Intense Moisture Repair Conditioner – 200ml",
    size: 200,
    unit: "ml",
    price: "₹199.00",
    images: [
      "/media/images/1IntenseHairConditioner.webp", 
      "/media/images/2IntenseHairConditioner.webp",
      "/media/images/3IntenseHairConditioner.webp",
      "/media/images/4IntenseHairConditioner.webp",
      "/media/images/5IntenseHairConditioner.webp",
      "/media/images/6IntenseHairConditioner.webp",
    ],
    description:
      "Restore dry, damaged hair with our Intense Moisture Repair Conditioner. Enriched with Amino Acids, Argan Oil, and nourishing plant butters, it deeply hydrates, reduces frizz, and leaves hair soft, smooth, and manageable.",
  },
  {
    id: 12,
    slug: "hydrating-lib-balm",
    title: "Hydrating Lib Balm – 10g",
    size: 10,
    price: "₹99.00",
    images: [
      "/media/images/1LipBlam.webp", 
      "/media/images/2LipBlam.webp",
      "/media/images/3LipBlam.webp",
      "/media/images/4LipBlam.webp",
      "/media/images/5LipBlam.webp",
      "/media/images/6LipBlam.webp",
    ],
    description:
      "Keep your lips soft and hydrated with our Hydrating Lip Balm. Enriched with Shea Butter, Vitamin E, Jojoba Oil, and Almond Oil, it deeply nourishes, repairs dryness, and provides long-lasting moisture.",
  },
];

const REVIEW_TEXTS = [
  "Amazing product! Highly recommended.",
  "Very good quality and value for money.",
  "Loved the fragrance and texture.",
  "Results are visible within a few days.",
  "Perfect for daily use.",
  "Gentle and effective.",
  "Skin feels smoother after using this.",
  "Totally satisfied with the purchase.",
  "Works exactly as described.",
  "Will definitely repurchase.",
  "Good packaging and fast delivery.",
  "Feels natural and premium.",
  "My skin feels refreshed.",
  "Helped improve my skin health.",
  "One of the best products I’ve used.",
];

// deterministic number from slug
const hashFromSlug = (slug) => {
  return slug
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

const generateReviewsForProduct = (slug) => {
  const reviews = [];
  const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  const seed = hashFromSlug(slug);

  for (let i = 0; i < 15; i++) {
    const rating = ((seed + i) % 2) + 4; // 4 or 5 stars
    breakdown[rating]++;

    reviews.push({
      id: `${slug}-${i}`,
      rating,
      text: REVIEW_TEXTS[(seed + i) % REVIEW_TEXTS.length],
      user: CUSTOMER_NAMES[(seed + i) % CUSTOMER_NAMES.length],
      date: new Date(
        Date.now() - i * 86400000
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    });
  }

  const totalReviews = 15;
  const totalScore = Object.entries(breakdown).reduce(
    (sum, [star, count]) => sum + star * count,
    0
  );

  return {
    rating: +(totalScore / totalReviews).toFixed(1),
    totalReviews,
    verifiedBuyers: totalReviews.toString(),
    breakdown,
    reviews,
  };
};

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
  
  const [isZoomed, setIsZoomed] = useState(false);

  const [productReviews, setProductReviews] = useState(() =>
  generateReviewsForProduct(slug)
);

useEffect(() => {
  if (slug) {
    setProductReviews(generateReviewsForProduct(slug));
  }
}, [slug]);

  const [current, setCurrent] = useState(0);
  const [pack, setPack] = useState(1);

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
  className={`main-image ${isZoomed ? "zoomed" : ""}`}
  draggable={false}
  onClick={() => setIsZoomed(!isZoomed)}
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
