import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box display={["block", "block", "none", "none"]}>
      <Box ref={btnRef} onClick={onOpen}>
        <HiOutlineMenuAlt1 />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent p='5rem 2rem'>
          <DrawerCloseButton />
          <Box>
            <Box onClick={onClose}>
              <Link to="/category/tops">Tops</Link>
            </Box>
            <Box mt={5} onClick={onClose}>
              <Link to="/category/pants">Pants</Link>
            </Box>
            <Box mt={5} onClick={onClose}>
              <Link to="/category/dresses">Dresses</Link>
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
