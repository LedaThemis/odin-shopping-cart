import { useState, useEffect } from 'react';
import '../styles/Shop.css';

import { Outlet } from 'react-router-dom';

import { ShopOutletContext } from './ShopOutletContext';

const Shop = () => {
  const [itemsData, setItemsData] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedData = await fetchProducts();
      setItemsData(processFetchedData(fetchedData));
    })();
  }, []);

  const fetchProducts = async () => {
    const fetchedData = await fetch('https://fakestoreapi.com/products/');
    const fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  };

  const processFetchedData = (dataArray) => {
    return dataArray.map(({ id, title, price, image }) => ({ id: id, title: title, price: price, imageURL: image }));
  };

  const isInCart = (itemID) => {
    return shoppingCartItems.find(({ id }) => itemID === id);
  };

  const getItem = (itemID) => {
    return itemsData.find(({ id }) => id === itemID);
  };

  const removeItemAtIndex = (arr, index) => {
    return arr.slice(0, index).concat(arr.slice(index + 1));
  };

  const addItemToCart = (itemID, itemCount) => {
    setShoppingCartItems(shoppingCartItems.concat({ id: itemID, itemCount: itemCount }));
  };

  const removeItemFromCart = (itemID) => {
    const itemIndex = shoppingCartItems.findIndex(({ id }) => id === itemID);
    setShoppingCartItems(removeItemAtIndex(shoppingCartItems, itemIndex));
  };

  const handleAddToCart = (itemID, itemCount) => {
    if (isInCart(itemID)) {
      removeItemFromCart(itemID);
    } else {
      addItemToCart(itemID, itemCount);
    }
  };

  return (
    <div className="shop">
      <h2>Shop</h2>
      <ShopOutletContext.Provider value={{ itemsData, shoppingCartItems, isInCart, handleAddToCart, getItem }}>
        <Outlet />
      </ShopOutletContext.Provider>
    </div>
  );
};

export default Shop;
