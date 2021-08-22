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
      </ul>
    </nav>
  );
};
