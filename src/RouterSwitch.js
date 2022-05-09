import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const RouterSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
