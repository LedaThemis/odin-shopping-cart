import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Checkout from '../components/Checkout';

import { ShopOutletContext } from '../components/ShopOutletContext';

test('should display "You currently have no items." when no items are provided', () => {
  render(
    <BrowserRouter>
      <ShopOutletContext.Provider value={{ shoppingCartItems: [], getItem: () => {} }}>
        <Checkout />
      </ShopOutletContext.Provider>
    </BrowserRouter>
  );

  expect(screen.getByText('You currently have no items.')).toBeInTheDocument();
});

test('should contain link to shop page', () => {
  render(
    <BrowserRouter>
      <ShopOutletContext.Provider value={{ shoppingCartItems: [], getItem: () => {} }}>
        <Checkout />
      </ShopOutletContext.Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('link--to--shop')).toHaveAttribute('href', '/shop');
});
