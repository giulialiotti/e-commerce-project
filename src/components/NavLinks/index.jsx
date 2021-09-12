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
          <Link to="/category/tops">Tops</Link>
        </li>
        <li>
          <Link to="/category/pants">Pants</Link>
        </li>
        <li>
          <Link to="/category/dresses">Dresses</Link>
        </li>
      </ul>
    </nav>
  );
};
