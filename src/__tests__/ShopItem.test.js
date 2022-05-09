import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ShopItem from '../components/ShopItem';

test('should display item title', () => {
  render(
    <BrowserRouter>
      <ShopItem title={'Title'} />
    </BrowserRouter>
  );

  expect(screen.getByText('Title')).toBeInTheDocument();
});

test('should display item price', () => {
  render(
    <BrowserRouter>
      <ShopItem price={3} />
    </BrowserRouter>
  );

  expect(screen.getByText('3')).toBeInTheDocument();
});
