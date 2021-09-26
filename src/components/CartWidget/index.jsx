import { Box } from '@chakra-ui/layout';
import { useContext } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';
import './styles.scss';

export const CartWidget = () => {

    const { sumCartProducts } = useContext(CartContext);

    return (
        <div className="cart-container">
            <AiOutlineShopping />
            <Box bg='var(--cream)' borderRadius='50%' p='0 5px' position='absolute' bottom='-5px' right='-8px'>
              <p className='cart-items-number'>{sumCartProducts()}</p>  
            </Box>
        </div>
    )
};