import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ShopItem from './ShopItem';

import { ShopOutletContext } from './ShopOutletContext';

import '../styles/ShopDisplay.css';

const ShopDisplay = () => {
  const { itemsData, shoppingCartItems, isInCart, handleAddToCart } = useContext(ShopOutletContext);

  return (
    <>
      <div>
        <p>
          You have {shoppingCartItems.length} items in your cart currently,{' '}
          <Link data-testid="link--to--checkout" className="checkout--page--link" to="checkout">
            go to checkout
          </Link>
        </p>
      </div>
      <div className="shop--items">
        {itemsData.map(({ id, title, price, imageURL }) => (
          <ShopItem
            key={id}
            id={id}
            title={title}
            price={price}
            imageURL={imageURL}
            added={isInCart(id)}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default ShopDisplay;
