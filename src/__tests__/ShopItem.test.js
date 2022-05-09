import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ShopItem from '../components/ShopItem';
import userEvent from '@testing-library/user-event';
import '@testing-library/dom';
import { act } from 'react-dom/test-utils';

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

test('should increment input value on increment button click', () => {
  render(
    <BrowserRouter>
      <ShopItem />
    </BrowserRouter>
  );

  expect(screen.getByTestId('shopItem--input--box').value).toBe('0');
  userEvent.click(screen.getByRole('button', { name: /\+/ }));
  expect(screen.getByTestId('shopItem--input--box').value).toBe('1');
});

test('should decrement input value on decrement button click', () => {
  render(
    <BrowserRouter>
      <ShopItem />
    </BrowserRouter>
  );

  expect(screen.getByTestId('shopItem--input--box').value).toBe('0');
  userEvent.click(screen.getByRole('button', { name: /-/ }));
  expect(screen.getByTestId('shopItem--input--box').value).toBe('-1');
});

test('should call handleAddCard on Add To Cart button click', () => {
  const handleAddCardMock = jest.fn();
  render(
    <BrowserRouter>
      <ShopItem handleAddToCart={handleAddCardMock} />
    </BrowserRouter>
  );

  userEvent.click(screen.getByRole('button', { name: /Add To Cart/ }));
  expect(handleAddCardMock).toHaveBeenCalled();
});

test('should call handleAddCard on Add To Cart button click with right arguments', () => {
  const handleAddCardMock = jest.fn();
  const itemId = 1;
  render(
    <BrowserRouter>
      <ShopItem id={itemId} handleAddToCart={handleAddCardMock} />
    </BrowserRouter>
  );

  userEvent.click(screen.getByRole('button', { name: /Add To Cart/ }));
  expect(handleAddCardMock).toHaveBeenCalledWith(itemId, 0);

  userEvent.click(screen.getByRole('button', { name: /\+/ }));
  userEvent.click(screen.getByRole('button', { name: /Add To Cart/ }));
  expect(handleAddCardMock).toHaveBeenCalledWith(itemId, 1);
});
