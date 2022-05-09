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
  expect(screen.getByRole('heading')).toBeInTheDocument();
});
