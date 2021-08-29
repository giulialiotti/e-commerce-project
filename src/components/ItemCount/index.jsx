import React from "react";
import { HStack, Button, Input, useNumberInput } from "@chakra-ui/react";

export const ItemCount = ({ stock }) => {
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

//import { useState } from 'react';

// export const ItemCount = ({stock}) => {

//     const [ counter, setCounter ] = useState(1);

//     const add = () => {
//         if (counter < stock) {
//             setCounter(counter + 1);
//         }
//     }

//     const subtract = () => {
//         if (counter > 1) {
//             setCounter(counter - 1);
//         }
//     }

//     return (
//         <>
//             <button onClick={ subtract }>-</button>
//             <input type="number" value={ counter } />
//             <button onClick={ add }>+</button>
//         </>
//     )
// };
