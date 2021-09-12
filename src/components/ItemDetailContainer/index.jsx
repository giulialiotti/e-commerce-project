import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail";
import { getFirestore } from '../../firebase/config';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { itemId } = useParams();
  
  useEffect(() => {

    // Firestore

    const db = getFirestore();
    const productsCollection = db.collection('products');
    const product = productsCollection.doc(itemId);

    product.get().then((doc) => {
      setProduct({...doc.data(), id: doc.id})
    })

  }, [itemId])

  const { id, name, price, image, stock, description } = product;

  return (
    <>
      {product && <ItemDetail id={id} title={name} price={price} image={image} stock={stock} description={description} />}
    </>
  );
};
