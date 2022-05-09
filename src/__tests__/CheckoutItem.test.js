import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';

test('should display item title', () => {
  render(
    <BrowserRouter>
      <CheckoutItem title={'Title'} />
    </BrowserRouter>
  );

  expect(screen.getByText('Title', { exact: false })).toBeInTheDocument();
});

test('should display item price', () => {
  render(
    <BrowserRouter>
      <CheckoutItem price={4} />
    </BrowserRouter>
  );

  expect(screen.getByText('4', { exact: false })).toBeInTheDocument();
  expect(screen.queryByText('5', { exact: false })).not.toBeInTheDocument();
});

test('should display item total price', () => {
  render(
    <BrowserRouter>
      <CheckoutItem price={4} count={3} />
    </BrowserRouter>
  );

  expect(screen.getByText('12', { exact: false })).toBeInTheDocument();
  expect(screen.queryByText('15', { exact: false })).not.toBeInTheDocument();
});
