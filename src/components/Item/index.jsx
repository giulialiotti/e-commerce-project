import { useState, useEffect } from "react";

export const Item = () => {

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
        <div>
            {products.map(product => {
                return (
                    <div>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <img src={product.image} />
                    </div>
                )
            })}
        </div>
    )
};