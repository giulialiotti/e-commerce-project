import { Link } from "@chakra-ui/react";
import React from "react";
import assets from "../../assets/assets";
import "./styles.scss";

export const HeroContainer = () => {
  return (
    <div className="border-hero-container">
      <div
        className="hero-image-container"
        style={{ backgroundImage: `url(${assets.heroImage})` }}
      >
        <div className="new-trend-text">
          <span></span>
          <p>New trend</p>
        </div>
        <h2>
          Summer sale stylish <strong>womens</strong>
        </h2>
        <div className="discover-more-text">
          <Link>Discover more</Link>
          <span></span>
        </div>
      </div>
    </div>
  );
};
