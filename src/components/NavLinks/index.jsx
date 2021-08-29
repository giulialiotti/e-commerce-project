import "./styles.scss";
import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/category/MLA109096">Jackets</Link>
        </li>
        <li>
          <Link to="/category/MLA109282">Pants</Link>
        </li>
        <li>
          <Link to="/category/MLA109042">Shirts</Link>
        </li>
      </ul>
    </nav>
  );
};
