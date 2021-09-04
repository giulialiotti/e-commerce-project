import React from "react";
import { HStack, Button, Input } from "@chakra-ui/react";

export const ItemCount = ({ inc, dec, input }) => {
  return (
    <>
      <HStack maxW="320px" pt={5} pb={5}>
        <Button {...dec} size="sm" h="48px">
          -
        </Button>
        <Input size="sm" maxW={16} {...input} h="48px" />
        <Button {...inc} size="sm" h="48px">
          +
        </Button>
      </HStack>
    </>
  );
};