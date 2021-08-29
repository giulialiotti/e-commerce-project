import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { ItemCount } from "../ItemCount";
import "./styles.scss";

export const ItemDetail = ({ title, price, image }) => {
  return (
    <section className="item-detail-section">
      <div className="product-image-container">
        <img src={image} alt={title} />
      </div>
      <div className="product-text">
        <h2 className="item-title">{title}</h2>
        <p className="item-price">${price}</p>
        <p className="item-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est
          nemo veniam. Explicabo est nemo veniam.
        </p>

        <Flex align="center" justify="space-between">
          <ItemCount stock="5" className="item-counter" />

          <Button
            colorScheme="teal"
            size="lg"
            fontFamily={"DM Sans"}
            textTransform="uppercase"
            fontSize={["15px", "16px", "18px", "22px"]}
          >
            Add to cart
          </Button>
        </Flex>
      </div>
    </section>
  );
};
