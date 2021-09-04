import { Button, Flex, useNumberInput } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ItemCount } from "../ItemCount";
import "./styles.scss";

export const ItemDetail = ({ title, price, image, stock }) => {
  const [ quantity, setQuantity ] = useState(1);  

  /* Item count functionality */
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
  useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: stock,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  /* Add items to cart function */
  const addToCart = () => {
    console.log({title, price, image, quantity})
  };

  /* Set quantity of items to add to cart */
  useEffect(() => {
    setQuantity(input.value);
  }, [input]); 

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
          <ItemCount className="item-counter" inc={inc} dec={dec} input={input}/>

          <Button
            colorScheme="teal"
            size="lg"
            fontFamily={"DM Sans"}
            textTransform="uppercase"
            fontSize={["15px", "16px", "18px", "22px"]}
            onClick={addToCart}
          >
            Add to cart
          </Button>
        </Flex>
      </div>
    </section>
  );
};
