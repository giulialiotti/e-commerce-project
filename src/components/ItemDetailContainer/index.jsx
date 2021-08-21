import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  async function fetchData() {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=remera"
    );
    const data = await response.json();

    return data.results[0];
  }

  useEffect(() => {
    fetchData().then((item) => {
      let product = {
        id: item.id,
        title: item.title,
        image: item.thumbnail,
        price: item.price,
      };
      console.log(product);
      setProduct(product);
    });
  }, []);

  return (
    <>
      <ItemDetail
        title={product.title}
        price={product.price}
        image={product.image}
      />
    </>
  );
};
