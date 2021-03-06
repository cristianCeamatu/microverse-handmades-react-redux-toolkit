import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';
import { getProducts, getProduct } from '../../features/catalog/catalogSlice';

jest.setTimeout(20000);
afterEach(() => {
  cleanup();
});

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);

describe('catalogSlice async actions and initial state', () => {
  test('has no products in the array in the initial fase', () => {
    const { products } = store.getState().catalog;
    expect(products.length).toStrictEqual(0);
  });

  test('getProducts fetches the Products from the API and populates the state array', async () => {
    await store.dispatch(getProducts());
    const { products } = store.getState().catalog;
    expect(products.length).not.toStrictEqual(0);
  });

  test('has a default empty product object in the initial fase', () => {
    const defaultEmptyProduct = { user: {}, favorited_by: [] };
    const { product } = store.getState().catalog;
    expect(product).toStrictEqual(defaultEmptyProduct);
  });

  test('getProduct fetches a Product from the API by the ID received as a parameter and populates the state product object', async () => {
    const id = 54;
    await store.dispatch(getProduct(id));
    const { product } = store.getState().catalog;
    expect(product.id).toStrictEqual(id);
  });
});
