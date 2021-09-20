import { getFirestore } from '../firebase/config';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const generateOrder = (buyer, cart, totalCartPrice) => {
    
    const db = getFirestore();
    const orders = db.collection('orders');

    const newOrder = {
        buyer: buyer,
        items: cart,
        total: totalCartPrice,
        date: firebase.firestore.Timestamp.fromDate(new Date())
    };

    try {
        orders.add(newOrder)
            .then((res) => console.log(res));        
    } catch (error) {
        console.log(error)
    }
}