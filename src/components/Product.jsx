import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={"/image/" + product.image} alt="Product" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        <span role="img" aria-label="Add">➕</span> Add to Cart
      </button>
    </div>
  );
};

export default Product;
