import React from "react";
import { Box } from "@chakra-ui/layout";
import assets from "../../assets/assets";
import { Image } from "@chakra-ui/image";

export const EmptyBasket = () => {
  return (
    <Box width="100%" position="relative" mt="2rem">
      <Image src={assets.emptyBasket} alt="" width="100%" />
      <Box
        as="h2"
        textStyle="body-500"
        color={"blackish"}
        textAlign={"center"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        width={"100%"}
      >
        — Your cart is empty —
      </Box>
    </Box>
  );
};
