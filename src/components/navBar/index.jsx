import React from "react";
import "./styles.scss";
import { NavLinks } from "../NavLinks/index";
import { CartWidget } from "../CartWidget/index";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";

export const NavBar = () => {
  return (
    <header>
      <HamburgerMenu />
      <NavLinks />
      <Link to="/">
        <h1>fresh</h1>
      </Link>
      <div className="flex-container">
        <Link to="/shop" className="shop-all-link">
          SHOP ALL
        </Link>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};