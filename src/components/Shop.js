import { useState, useEffect } from 'react';
import '../styles/Shop.css';
import ShopItem from './ShopItem';

const Shop = () => {
  const [itemsData, setItemsData] = useState([]);

  const fetchProducts = async () => {
    const fetchedData = await fetch('https://fakestoreapi.com/products/');
    const fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  };

  const processFetchedData = (dataArray) => {
    return dataArray.map(({ id, title, price, image }) => ({ id: id, title: title, price: price, imageURL: image }));
  };

  useEffect(() => {
    (async () => {
      const fetchedData = await fetchProducts();
      setItemsData(processFetchedData(fetchedData));
    })();
  }, []);

  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="shop--items">
        {itemsData.map(({ id, title, price, imageURL }) => (
          <ShopItem key={id} id={id} title={title} price={price} imageURL={imageURL} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
