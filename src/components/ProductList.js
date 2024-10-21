import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://flipkart-product-scraper-almashines-3eia.onrender.com/api/products"
      )
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="p1">Product List</h1>
      </div>
      <div className="productlist-container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
