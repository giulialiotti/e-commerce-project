import React from "react";
import "./styles.scss";
import { Box } from "@chakra-ui/layout";
import assets from "../../assets/assets";
import { Image } from "@chakra-ui/image";

export const EmptyBasket = () => {
  return (
    <Box width="100%" position="relative" mt="2rem">
      <Image src={assets.emptyBasket} alt="" width="100%" />
      <h2 className="empty-cart-container-title">— Your cart is empty —</h2>
    </Box>
  );
};
