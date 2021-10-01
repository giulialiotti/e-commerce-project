import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@chakra-ui/button";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export const CartWithItems = () => {
  const { cart, removeFromCart, emptyCart, totalCartPrice } =
    useContext(CartContext);

  return (
    <Box>
      <Box
        as="h2"
        textStyle="h2"
        color={"blackish"}
        textAlign={"center"}
        p={["2rem 0", "2rem 0", "4rem 0 2rem", "8rem 0 2rem"]}
      >
        Shopping Bag
      </Box>

      {cart.map((product) => {
        return (
          <Box key={product.id} display="flex" alignItems="center" pb="2rem">
            <Box width="30%" mr={["1rem", "1rem", "3rem"]}>
              <Image src={product.image} alt={product.title} />
            </Box>
            <Box>
              <Box>
                <Box as="h3" textStyle="body-700" color={"blackish"} pb={"5px"}>
                  {product.title}
                </Box>
                <Box as="p" textStyle="body-500" color={"blackish"} pb={"5px"}>
                  Quantity: {product.quantity}
                </Box>
                <Box as="p" textStyle="body-500" color={"blackish"} pb={"5px"}>
                  Price: ${product.price * product.quantity}
                </Box>
              </Box>
              <HiOutlineTrash onClick={() => removeFromCart(product.id)} />
            </Box>
          </Box>
        );
      })}

      <Box display="flex" justifyContent="flex-end" flexWrap="wrap">
        <Box width="100%">
          <Box
            as="h3"
            textStyle="body-700"
            color={"blackish"}
            pb={"10px"}
            textAlign={"right"}
            fontWeight={500}
          >
            TOTAL: ${totalCartPrice()}
          </Box>
        </Box>

        <Button bg="darkRed" color="white" size="sm" onClick={emptyCart}>
          Empty cart
        </Button>

        <Link to="/checkout">
          <Button bg="cream" color="white" size="sm" ml="1rem">
            Checkout
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
