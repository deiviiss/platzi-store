/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import CheckOutItem from '@components/CheckOutItem';

import '@styles/components/Checkout.styl';

const Checkout = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {state.cart.length > 0 ? (
          <h3>Lista de Pedidos:</h3>
        ) : (
          <h2>Sin Pedidos</h2>
        )}
        {state.cart.map((item, index) => (
          <CheckOutItem product={item} key={index} index={index} />
        ))}
      </div>
      {state.cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${sumTotal()}`}</h3>
        </div>
      )}
    </div>
  );
};

export default Checkout;
