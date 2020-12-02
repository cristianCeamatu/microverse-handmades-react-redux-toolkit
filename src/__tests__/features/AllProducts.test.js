import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';

jest.setTimeout(20000);
describe('Products page', () => {
  afterEach(() => {
    cleanup();
  });

  test('has a crafts title and a total section for the slider', async () => {
    const history = createMemoryHistory();
    history.push('/products');

    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(typeof getAllByText(/Crafts/i)).toStrictEqual('object');
    expect(getAllByText(/Crafts/i).length).toBeGreaterThanOrEqual(1);
    expect(getByText(/total/i)).toBeTruthy();
  });

  test('has a list of products after the load', async () => {
    const history = createMemoryHistory();
    history.push('/products');

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    const result = await screen.findAllByAltText(/product/i);
    expect(typeof result).toStrictEqual('object');
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});
