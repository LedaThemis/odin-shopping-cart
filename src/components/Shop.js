import { useEffect } from 'react';
import '../styles/Shop.css';

const Shop = () => {
  const fetchProducts = async () => {
    const fetchedData = await fetch('https://fakestoreapi.com/products/');
    const fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  };

  useEffect(() => {
    (async () => {
      const fetchedData = await fetchProducts();
      console.log(fetchedData);
    })();
  }, []);

  return (
    <div className="shop">
      <h2>Shop</h2>
    </div>
  );
};

export default Shop;
