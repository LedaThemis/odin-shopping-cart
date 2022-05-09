import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import ShopDisplay from '../components/ShopDisplay';

const outletDataMock = { itemsData: [], shoppingCartItems: [0, 1, 2], isInCart: () => {}, handleAddToCart: () => {} };
const useOutletContextMock = () => outletDataMock;

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useOutletContext: useOutletContextMock,
  };
});

test('should display number of items in shopping cart', () => {
  render(
    <BrowserRouter>
      <div>
        <ShopDisplay />
      </div>
    </BrowserRouter>
  );

  expect(screen.getByText('You have 3', { exact: false })).toBeInTheDocument();
});

test('should contain link to checkout page', () => {
  render(
    <BrowserRouter>
      <div>
        <ShopDisplay />
      </div>
    </BrowserRouter>
  );

  expect(screen.getByTestId('link--to--checkout')).toHaveAttribute('href', '/checkout');
});
