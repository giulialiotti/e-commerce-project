import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.scss";
import { Box } from "@chakra-ui/layout";
import { CartWithItems } from "./CartWithItems";
import { EmptyBasket } from "./EmptyBasket";

export const CartContainer = () => {
  const { cart } =
    useContext(CartContext);

  return (
    <Box as="section" p={["0 1.5rem 5rem", "0 4rem 5rem", "0 8rem 5rem"]}>
        {!cart.length 
            ? <EmptyBasket />
            :  <CartWithItems />   
        }
    </Box>
  );
};