import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@chakra-ui/button";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export const CartWithItems = () => {
    const { cart, removeFromCart, emptyCart, totalCartPrice } =
      useContext(CartContext);
  
    return (
      <Box>
        <h2 className="cart-container-title">Shopping Bag</h2>
  
        {cart.map((product) => {
          return (
            <Box key={product.id} display="flex" alignItems="center" pb="2rem">
              <Box width="30%" mr={["1rem", "1rem", "3rem"]}>
                <Image src={product.image} alt={product.title} />
              </Box>
              <Box>
                <Box>
                  <h3 className="cart-container-product-title">
                    {product.title}
                  </h3>
                  <p className="cart-container-product-text">
                    Quantity: {product.quantity}
                  </p>
                  <p className="cart-container-product-text">
                    Price: ${product.price * product.quantity}
                  </p>
                </Box>
                <HiOutlineTrash onClick={() => removeFromCart(product.id)} />
              </Box>
            </Box>
          );
        })}
  
        <Box display="flex" justifyContent="flex-end" flexWrap='wrap'>
          <Box width='100%'>
              <h3 className="cart-container-product-title text-right">TOTAL: ${totalCartPrice()}</h3>
          </Box>
  
          <Button bg="var(--red)" color="white" size="sm" onClick={emptyCart}>
            Empty cart
          </Button>
  
          <Link to="/checkout">
            <Button bg="var(--cream)" color="white" size="sm" ml="1rem">
              Checkout
            </Button>
          </Link>
        </Box>
      </Box>
    );
  };
  
