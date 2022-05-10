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

test('should not display "You currently have no items." when items are provided', () => {
  render(
    <BrowserRouter>
      <ShopOutletContext.Provider
        value={{ shoppingCartItems: [1, 2, 3], getItem: () => ({ id: Math.random(), title: '', price: 0 }) }}
      >
        <Checkout />
      </ShopOutletContext.Provider>
    </BrowserRouter>
  );

  expect(screen.queryByText('You currently have no items.')).not.toBeInTheDocument();
});

test('should display correct total price', () => {
  render(
    <BrowserRouter>
      <ShopOutletContext.Provider
        value={{
          shoppingCartItems: [
            { id: 1, itemCount: 2 },
            { id: 1, itemCount: 3 },
          ],
          getItem: () => ({ id: Math.random(), title: '', price: 2 }),
        }}
      >
        <Checkout />
      </ShopOutletContext.Provider>
    </BrowserRouter>
  );

  expect(screen.getByText('Which makes your total 10', { exact: false })).toBeInTheDocument();
});
