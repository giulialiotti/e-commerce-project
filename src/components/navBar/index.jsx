import { HiOutlineUser, HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";
import { NavLinks } from "../NavLinks/index";
import { CartWidget } from "../CartWidget/index";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <HiOutlineMenuAlt1 className="hamburger-menu" />
      <NavLinks />
      <Link to="/">
        <h1>fresh</h1>
      </Link>
      <div className="flex-container">
        <AiOutlineSearch className="hide-mobile" />
        <HiOutlineUser className="hide-mobile" />
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};
