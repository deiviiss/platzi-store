// /* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Title from '@components/Title';

import AppContext from '@context/AppContext';

import '@styles/components/Header.styl';
import logo from '@logos/logo_yard_sale.svg';

const Header = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          <img src={logo} alt="logo" height={32} />
          <Title title="E-commerce App from dev" />
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {state.cart.length > 0 && (
          <div className="Header-alert">{state.cart.length}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
