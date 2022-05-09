import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Checkout from '../components/Checkout';

beforeEach(() => {
  jest.resetModules();
});

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  const outletDataMock = { shoppingCartItems: [], getItem: () => {} };
  const useOutletContextMock = () => outletDataMock;

  return {
    __esModule: true,
    ...originalModule,
    useOutletContext: useOutletContextMock,
  };
});

test('should display "You currently have no items." when no items are provided', () => {
  render(
    <BrowserRouter>
      <Checkout />
    </BrowserRouter>
  );

  expect(screen.getByText('You currently have no items.')).toBeInTheDocument();
});

test('should contain link to shop page', () => {
  render(
    <BrowserRouter>
      <Checkout />
    </BrowserRouter>
  );

  expect(screen.getByTestId('link--to--shop')).toHaveAttribute('href', '/shop');
});
