import { Link } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';

import { useContext } from 'react';
import { ShopOutletContext } from './ShopOutletContext';

import '../styles/Checkout.css';

const Checkout = () => {
  const { shoppingCartItems, getItem } = useContext(ShopOutletContext);

  const getTotalPrice = () => {
    return shoppingCartItems
      .map(({ id, itemCount }) => ({ price: getItem(id).price, itemCount }))
      .reduce((a, b) => {
        return a + b.price * b.itemCount;
      }, 0);
  };

  return (
    <div className="checkout--container">
      <h3>Shopping Cart</h3>
      {shoppingCartItems.length < 1 ? (
        <p>
          You currently have no items.{' '}
          <Link data-testid="link--to--shop" className="shop--page--link" to="/shop">
            go back to shop
          </Link>
        </p>
      ) : (
        <>
          <div className="shopping--cart--items">
            {shoppingCartItems
              .map(({ id, itemCount }) => ({ item: getItem(id), itemCount }))
              .map(({ item, itemCount }) => (
                <CheckoutItem key={item.id} title={item.title} price={item.price} count={itemCount} />
              ))}
          </div>
          <p id="total--price--paragraph">
            Which makes your total {getTotalPrice()}$, <button id="checkout--button">Checkout</button>
          </p>
        </>
      )}
    </div>
  );
};

export default Checkout;
