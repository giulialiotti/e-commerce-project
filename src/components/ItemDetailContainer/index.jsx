import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { itemId } = useParams();

  async function fetchData() {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=koxis"
    );
    const data = await response.json();

    return data.results;
  }

  useEffect(() => {
    fetchData().then((item) => {
      setProduct(item.find((prod) => prod.id === itemId));
    });
  }, [itemId]);

  const { id, title, price, thumbnail, available_quantity } = product;

  return (
    <>
      {product && <ItemDetail id={id} title={title} price={price} image={thumbnail} stock={available_quantity}/>}
    </>
  );
};
