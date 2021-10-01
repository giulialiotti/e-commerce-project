import { Button, Flex, useNumberInput, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount";

export const ItemDetail = ({ id, title, price, image, stock, description }) => {
  const [quantity, setQuantity] = useState(1);

  const { addToCart, isInCart } = useContext(CartContext);

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

  /* Add items to cart */
  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      image,
      quantity,
    });
  };

  /* Set quantity of items to add to cart */
  useEffect(() => {
    let value = parseFloat(input.value);
    setQuantity(value);
  }, [input]);

  return (
    <Box
      as="section"
      display={["block", "block", "flex", "flex"]}
      justifyContent={["unset", "unset", "center"]}
      p={[0, 0, "3rem", "3rem"]}
      className="item-detail-section"
    >
      <Box width={["100%", "100%", "500px"]}>
        <Image src={image} alt={title} objectFit="cover" />
      </Box>
      <Box
        p={["1rem 2rem", "1rem 2rem", "1rem 0 0 2rem"]}
        w={[null, null, "500px"]}
        className="product-text"
      >
        <Box
          as="h3"
          className="item-title"
          textStyle="h3"
          color={"blackish"}
          p={["10px 0 5px"]}
        >
          {title}
        </Box>
        <Box
          as="p"
          textStyle="h3"
          color={"blackish"}
          fontWeight={600}
          p={"1rem 0"}
        >
          {price} USD
        </Box>
        <Box as="p" textStyle="body-700" color={"blackish"} pb={"5px"}>
          {description}
        </Box>

        <Flex align="center" justify="space-between">
          <ItemCount
            className="item-counter"
            inc={inc}
            dec={dec}
            input={input}
          />

          {isInCart(id) ? (
            <Link to="/cart" className="end-purchase-link">
              <Button
                bg="darkRed"
                color="white"
                size="lg"
                fontFamily={"DM Sans"}
                textTransform="uppercase"
                fontSize={["15px", "16px", "18px", "22px"]}
              >
                End purchase
              </Button>
            </Link>
          ) : (
            <Button
              bg="cream"
              color="white"
              size="lg"
              fontFamily={"DM Sans"}
              textTransform="uppercase"
              fontSize={["15px", "16px", "18px", "22px"]}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};
