import React from "react";
import { NavLinks } from "../NavLinks/index";
import { CartWidget } from "../CartWidget/index";
import { HamburgerMenu } from "./HamburgerMenu";
import { Box, Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Flex
      align={"center"}
      justifyContent={"space-between"}
      p={["4.5vw", "4.5vw", "1vw 5vw"]}
    >
      <HamburgerMenu />
      <NavLinks />
      <Link to="/">
        <Box as="h1" textStyle="h1" color={"blackish"} textAlign={"center"}>
          fresh
        </Box>
      </Link>
      <Flex
        align={"center"}
        justifyContent={"flex-end"}
        width={["unset", "unset", "40%"]}
      >
        <Box display={["none", "none", "block"]}>
          <Link to="/shop">SHOP ALL</Link>
        </Box>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Flex>
    </Flex>
  );
};
