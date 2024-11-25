import React from "react";
import "./ProductListing.css";

const products = [
    {
      id: 1,
      title: "Red Dress",
      price: "$50",
      image: "/1.jpg", // Path relative to the 'public' folder
    },
    {
      id: 2,
      title: "Black Gown",
      price: "$80",
      image: "/2.jpg",
    },
    {
      id: 3,
      title: "Summer Dress",
      price: "$60",
      image: "/3.jpg",
    },
    {
      id: 4,
      title: "Party Wear",
      price: "$70",
      image: "/4.jpg",
    },
  ];
  

const ProductListing = () => {
  return (
    <div className="product-listing">
      <h2 className="font">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
