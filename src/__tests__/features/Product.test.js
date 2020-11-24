import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';

describe('Product page', () => {
  afterEach(() => {
    cleanup();
  });

  test('display a product image, usage and contact crafter button', async () => {
    const history = createMemoryHistory();
    history.push('/products/50');

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    const result = await screen.findByText(/usage/i);
    const button = await screen.findByText(/contact crafter/i);
    expect(result).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
