import React, { useContext } from 'react';
import '../styles/components/Checkout.styl';
import AppContext from '../context/AppContext';

const CheckOutItem = ({ product, index }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{product.title}</h4>
        <span>$ {product.price}</span>
      </div>
      <button
        type="button"
        onClick={() => {
          removeFromCart(product, index);
        }}
      >
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

export default CheckOutItem;
