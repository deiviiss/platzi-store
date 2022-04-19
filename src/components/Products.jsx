/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import '@styles/components/Products.styl';
import AppContext from '@context/AppContext';
import Product from '@components/Product';

const Products = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
