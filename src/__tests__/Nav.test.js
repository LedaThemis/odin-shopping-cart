import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

test('should render heading in navbar', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  expect(screen.getByRole('heading')).toBeVisible();
});

test('should render links', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  expect(screen.getAllByRole('link')[0]).toBeVisible();
  expect(screen.getAllByRole('link')[1]).toBeVisible();
});

test('should render 2 links', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  expect(screen.getAllByRole('link').length).toBe(2);
});
