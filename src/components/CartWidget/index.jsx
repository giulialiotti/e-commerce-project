import { Box } from "@chakra-ui/layout";
import { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { sumCartProducts } = useContext(CartContext);

  return (
    <Box
      position={"relative"}
      className="cart-container"
      ml={[0, 0, "2rem", "2rem"]}
    >
      <AiOutlineShopping width={"20px"} height={"20px"} />
      <Box
        bg="cream"
        borderRadius="50%"
        p="0 5px"
        position="absolute"
        bottom="-5px"
        right="-8px"
      >
        <Box as="p" textStyle="number" textAlign="center">
          {sumCartProducts()}
        </Box>
      </Box>
    </Box>
  );
};
