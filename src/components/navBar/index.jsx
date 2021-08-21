import "./styles.scss";
import { Link } from "@chakra-ui/layout";
export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};
