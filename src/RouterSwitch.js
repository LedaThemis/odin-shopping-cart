import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home';
import Nav from './components/Nav';

const RouterSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
