import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../app/store';
import App from '../App';

afterEach(() => {
  cleanup();
});

test('renders the home page with no errors', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );

  expect(typeof getAllByText(/Crafts/i)).toStrictEqual('object');
  expect(getAllByText(/Crafts/i).length).toBeGreaterThanOrEqual(1);
});
