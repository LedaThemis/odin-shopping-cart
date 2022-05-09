import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="nav">
      <h1 id="app--header" name="app--header">
        Shopping Page
      </h1>
      <ul className="nav--links">
        <li className="nav--link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav--link">
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
