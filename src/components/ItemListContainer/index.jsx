import { useState, useEffect } from "react";
import "./styles.scss";
import { ItemList } from "../ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=vestido"
    );
    const data = await response.json();

    return data.results;
  }

  useEffect(() => {
    const getData = async () => {
      let data = await fetchData();
      let product = data.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
        };
      });
      setProducts(product);
    };
    getData();
  }, []);

  if (products.length > 0) {
    console.log(products);
  }

  return (
    <section>
      <h2 className="products-title">
        Our trendy <strong>products</strong>
      </h2>
      <div className="item-list-container">
        <ItemList products={products} />
      </div>
    </section>
  );
};
