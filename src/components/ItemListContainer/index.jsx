import { useState, useEffect } from "react";
import { ItemList } from '../ItemList';

export const ItemListContainer = ( { greeting } ) => {
    const [ products, setProducts ] = useState([]);

    async function fetchData() {
        const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=bazar");
        const data = await response.json();

        return data.results;
    }   

    useEffect(() => {
        const getData = async () => {
            let data = await fetchData();
            let product = data.map( product => {
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.thumbnail
                }
            });
            setProducts(product);
        }
       getData();
    }, [])

    if (products.length > 0) {
        console.log(products);
    }

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </>
    )
};