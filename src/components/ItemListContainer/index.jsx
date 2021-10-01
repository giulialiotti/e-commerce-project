import { useState, useEffect } from "react";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/config";
import { Grid, Box } from "@chakra-ui/react";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    // Firestore

    const db = getFirestore();
    const productsCollection = db.collection("products");

    if (catId) {
      const arrayFiltered = productsCollection.where("category", "==", catId);
      arrayFiltered.get().then((response) => {
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(data);

        setProducts(data);
      });
    } else {
      productsCollection.get().then((response) => {
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(data);

        setProducts(data);
      });
    }
  }, [catId]);

  return (
    <section id="item-list-section">
      <Box
        as='h2'
        textStyle="h2"
        color={"blackish"}
        textAlign={"center"}
        p={["2rem 0", "2rem 0", "4rem 0 2rem", "8rem 0 2rem"]}
      >
        Our trendy <strong>products</strong>
      </Box>
      <Grid
        templateColumns={[
          "1fr 1fr",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={"1.5rem"}
        p={["0 1.5rem 5rem", "0 4rem 4rem", "0 10rem 6rem"]}
      >
        <ItemList products={products} />
      </Grid>
    </section>
  );
};
