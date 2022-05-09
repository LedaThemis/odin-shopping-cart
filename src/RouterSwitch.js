import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav';

const RouterSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
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
