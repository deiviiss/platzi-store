/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Home from '@containers/Home';
// import Checkout from '@containers/Checkout';
import Layout from '@components/Layout';
import NotFound from '@containers/NotFound';
//init context
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

//reload development
// import { hot } from 'react-hot-loader/root';

const AsyncCheckoutContainer = React.lazy(() => import('@containers/Checkout'));

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.products).length;
  return (
    <>
      {isEmpty > 0 ? (
        <Suspense fallback={<div>Loading...</div>}>
          <AppContext.Provider value={initialState}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route
                    exact
                    path="/checkout"
                    element={<AsyncCheckoutContainer />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </AppContext.Provider>
        </Suspense>
      ) : (
        <h1>Loading... </h1>
      )}
    </>
  );
};

export default App;
