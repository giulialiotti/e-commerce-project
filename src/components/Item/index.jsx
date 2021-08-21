import "./styles.scss";

export const Item = ({ title, price, image }) => {
  return (
    <div className="item-container">
      <div className="product-image-container">
        <img src={image} alt={title} />
      </div>
      <div className="product-text">
        <h3>Category</h3>
        <h2>{title}</h2>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};
