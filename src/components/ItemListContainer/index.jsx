import { useState, useEffect } from "react";
import "./styles.scss";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase/config';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { catId } = useParams();

  useEffect(() => {

    // Firestore

    const db = getFirestore();
    const productsCollection = db.collection('products');

    if (catId) {
      const arrayFiltered = productsCollection.where('category', '==', catId);
      arrayFiltered.get().then((response) => {
        const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}));
        console.log(data);
  
        setProducts(data);
      })
    } else {
      productsCollection.get().then((response) => {
        const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}));
        console.log(data);

        setProducts(data);
      })  
    }

  }, [catId]);

  return (
    <section id="item-list-section">
      <h2 className="products-title">
        Our trendy <strong>products</strong>
      </h2>
      <div className="item-list-container">
        <ItemList products={products} />
      </div>
    </section>
  );
};
