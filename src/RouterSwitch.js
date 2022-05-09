import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import ShopDisplay from './components/ShopDisplay';

const RouterSwitch = () => {
  return (
    <BrowserRouter basename="/odin-shopping-cart">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />}>
            <Route index element={<ShopDisplay />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Layout = () => {
  return (
    <div id="layout">
      <Nav />
      <Outlet />
    </div>
  );
};

export default RouterSwitch;
