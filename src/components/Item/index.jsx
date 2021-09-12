import { Link } from "react-router-dom";
import "./styles.scss";

export const Item = ({ id, title, price, image, category }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="item-container">
        <div className="product-image-container">
          <img src={image} alt={title} />
        </div>
        <div className="product-text">
          <h3>{category}</h3>
          <h2>{title}</h2>
          <p className="price">${price}</p>
        </div>
      </div>
    </Link>
  );
};
