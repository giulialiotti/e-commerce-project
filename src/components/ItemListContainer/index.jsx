import { useState, useEffect } from "react";
import "./styles.scss";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { catId } = useParams();
  console.log(catId);

  async function fetchData() {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=remera"
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
          category: product.category_id,
        };
      });

      if (catId) {
        const arrayFiltered = product.filter((item) => item.category === catId);
        setProducts(arrayFiltered);
      } else {
        setProducts(product);
      }
    };
    getData();
  }, [catId]);

  console.log(products);

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
