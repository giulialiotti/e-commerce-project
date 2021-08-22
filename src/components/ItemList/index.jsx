import React from "react";
import { Item } from "../Item";

export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <Item
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
