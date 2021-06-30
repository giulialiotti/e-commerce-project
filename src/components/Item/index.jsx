import { ItemCount } from '../ItemCount';

export const Item = ({title, price, image}) => {
    return (
        <div>
            <div className="product-image-container">
                <img src={image} alt={title} />
            </div>
            <div className="product-text">
                <h2>{title}</h2>
                <p>Descripción</p>
                <p className="price">{price}</p>
                <ItemCount stock="5"/>             
            </div>
        </div>
    )
};