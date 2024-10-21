import React, { useState } from "react";
import axios from "axios";
import "./ProductInput.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { FadeLoader } from "react-spinners";

const ProductInput = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState();
  const [spinner, setSpinner] = useState(false);

  const navigate = useNavigate();
  const handleAddProduct = async () => {
    setSpinner((prev) => !prev);
    const load = await axios.post(
      "https://flipkart-product-scraper-almashines-3eia.onrender.com/api/add",
      { url }
    );
    setData(load?.data);
    setSpinner((prev) => !prev);
    console.log(data);
  };

  return (
    <div>
      <center>
        <h1> Flipkart Product Scraper</h1>
      </center>
      <div className="main-container">
        <div className="InputContainer">
          <input
            placeholder="Insert URL...."
            id="input"
            class="input"
            name="text"
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          ></input>
        </div>
        <button
          className="btn"
          style={{ marginRight: "30px" }}
          onClick={(e) => {
            handleAddProduct();
          }}
        >
          Fetch Details
        </button>
        <button className="btn" onClick={(e) => navigate("/products")}>
          All Products
        </button>
      </div>
      <div className="loader-div"><FadeLoader loading={spinner} className="loader"/></div>
      {data?.data && <ProductCard product={data?.data} />}
    </div>
  );
};

export default ProductInput;
