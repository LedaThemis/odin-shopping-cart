import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import ShopDisplay from '../components/ShopDisplay';

import { ShopOutletContext } from '../components/ShopOutletContext';

test('should display number of items in shopping cart', () => {
  render(
    <BrowserRouter>
      <ShopOutletContext.Provider
        value={{ itemsData: [], shoppingCartItems: [0, 1, 2], isInCart: () => {}, handleAddToCart: () => {} }}
      >
        <ShopDisplay />
      </ShopOutletContext.Provider>
    </BrowserRouter>
  );

  expect(screen.getByText('You have 3', { exact: false })).toBeInTheDocument();
});

test('should contain link to checkout page', () => {
  render(
    <BrowserRouter>
      <ShopDisplay />
    </BrowserRouter>
  );

  expect(screen.getByTestId('link--to--checkout')).toHaveAttribute('href', '/checkout');
});
