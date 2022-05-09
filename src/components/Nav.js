import { Link } from 'react-router-dom';

import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav id="nav">
      <h1 id="app--header" name="app--header">
        Shopping Page
      </h1>
      <ul className="nav--links">
        <li>
          <Link className="nav--link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav--link" to="/shop">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
