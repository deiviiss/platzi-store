import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'https://platzi-store-ts-api.herokuapp.com/api/v1';

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(initialState);

  useEffect(async () => {
    const response = await axios(API);

    setProducts(response.data);
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const removeFromCart = (payload, indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((items, index) => items.id != payload & index != indexValue)
    })
  }

  return {
    products,
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
