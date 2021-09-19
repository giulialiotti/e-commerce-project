import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/config';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const Checkout = () => {

    const { cart, totalCartPrice } = useContext(CartContext);
    
    const db = getFirestore();
    const orders = db.collection('orders');

    const buyer = {
        name: 'Name and Lastname',
        phone: 11123950003,
        email: 'example@gmail.com'
    };

    const newOrder = {
        buyer: buyer,
        items: cart,
        total: totalCartPrice(),
        date: firebase.firestore.Timestamp.fromDate(new Date())
    };

    try {
        orders.add(newOrder)
            .then((res) => console.log(res));        
    } catch (error) {
        console.log(error)
    }

    return (
        <div>
            <h1>Checkout</h1>
        </div>
    )
}
