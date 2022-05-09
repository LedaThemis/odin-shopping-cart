import { useState } from 'react';
import '../styles/ShopItem.css';

const ShopItem = ({ id, title, price, imageURL, added, handleAddToCart }) => {
  const [itemCount, setItemCount] = useState(0);

  const onInputChange = (e) => {
    setItemCount(e.target.value);
  };

  const incrementItemCount = () => {
    setItemCount(itemCount + 1);
  };
  const decrementItemCount = () => {
    setItemCount(itemCount - 1);
  };

  return (
    <div className="shop--item">
      <div className="shop--item--top">
        <img className="shop--item--image" src={imageURL} alt=""></img>
        <p className="shop--item--title">{title}</p>
      </div>
      <div className="shop--item--bottom">
        <p className="shop--item--price">{price}</p>
        <div className="shop--item--controls">
          <input
            className="shop--item--input"
            type="number"
            min="1"
            onChange={onInputChange}
            value={itemCount}
            data-testid="shopItem--input--box"
          ></input>
          <button className="shop--item--increment shop--item--button" onClick={incrementItemCount}>
            +
          </button>
          <button className="shop--item--decrement shop--item--button" onClick={decrementItemCount}>
            -
          </button>
          <button
            className={'shop--item--add shop--item--button' + (added ? ' shop--item--added' : '')}
            onClick={() => handleAddToCart(id, itemCount)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
