import React from "react";
import { Item } from "../Item";

export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <Item
              id={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
