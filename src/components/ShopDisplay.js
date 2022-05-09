import { Link, useOutletContext } from 'react-router-dom';
import ShopItem from './ShopItem';

import '../styles/ShopDisplay.css';

const ShopDisplay = () => {
  const { itemsData, shoppingCartItems, isInCart, handleAddToCart } = useOutletContext();

  return (
    <>
      <div>
        <p>
          You have {shoppingCartItems.length} items in your cart currently,{' '}
          <Link className="checkout--page--link" to="checkout">
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
