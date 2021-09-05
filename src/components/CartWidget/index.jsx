import { useContext } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';
import './styles.scss';

export const CartWidget = () => {

    const { sumCartProducts } = useContext(CartContext);

    return (
        <div className="cart-container">
            <AiOutlineShopping />
            <p>{sumCartProducts()}</p>
        </div>
    )
};