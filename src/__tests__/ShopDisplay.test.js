import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import ShopDisplay from '../components/ShopDisplay';

import { ShopOutletContext } from '../components/ShopOutletContext';

describe('display number of items in shopping cart', () => {
  test('when there are 3 items', () => {
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

  test('when there are 0 items', () => {
    render(
      <BrowserRouter>
        <ShopOutletContext.Provider
          value={{ itemsData: [], shoppingCartItems: [], isInCart: () => {}, handleAddToCart: () => {} }}
        >
          <ShopDisplay />
        </ShopOutletContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('You have 0', { exact: false })).toBeInTheDocument();
  });
});

test('should contain link to checkout page', () => {
  render(
    <BrowserRouter>
      <ShopOutletContext.Provider
        value={{ itemsData: [], shoppingCartItems: [], isInCart: () => {}, handleAddToCart: () => {} }}
      >
        <ShopDisplay />
      </ShopOutletContext.Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('link--to--checkout')).toHaveAttribute('href', '/checkout');
});
