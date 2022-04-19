import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = item => {
    addToCart(item);
  };

  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};
export default Product;
