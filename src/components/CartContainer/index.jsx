import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from '@chakra-ui/button';
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from 'react-router-dom';

export const CartContainer = () => {

    const { cart, removeFromCart, emptyCart } = useContext(CartContext);
    
    return (
        <div>
            <h2>Shopping Bag</h2>

            {cart.map((product) => {
                return (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Quantity: ${product.quantity}</p>
                        <p>Price: ${product.price * product.quantity}</p>
                        <HiOutlineTrash onClick={() => removeFromCart(product.id)}/>
                    </div>
                )
            })}

            <Button bg="var(--red)" color="white" size="sm" onClick={emptyCart}>
                Empty cart
            </Button>
            
            <Link to="/checkout">
                <Button bg="var(--cream)" color="white" size="sm">
                    Checkout
                </Button>            
            </Link>
        </div>
    )
}
