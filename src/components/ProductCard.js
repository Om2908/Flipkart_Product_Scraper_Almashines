import React, { useState } from "react";
import "./ProductInput.css";
import "./ProductCard.css"; // Import CSS

const ProductCard = ({ product }) => {
  const [toggle, setToggle] = useState(false);

  product.priceHistory = product.priceHistory.map((data) => {
    const ioDate = data.date;
    const date = new Date(ioDate);

    // Format the date to include both date and time
    const simpleDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    const simpleTime = `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;

    console.log(`${simpleDate} ${simpleTime}`);

    return {
      price: data.price,
      date: `${simpleDate} ${simpleTime}`, // Combine date and time
    };
  });

  return (
    <div className="product-card">
      <img className="product-image" src={product?.image} alt={product.title} />
      <h2 className="product-title">{product?.title}</h2>
      <p className="product-description">{product?.description}</p>
      <p className="product-price">₹{product?.currentPrice}</p>
      <p className="product-reviews">⭐ {product?.reviews} Reviews</p>
      <button
        className="btn"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Recheck Price
      </button>
      {toggle &&
        product.priceHistory.map((data, index) => (
          <p key={index}>
            Date: {data.date} | Price: ₹{data.price}
          </p>
        ))}
    </div>
  );
};

export default ProductCard;
