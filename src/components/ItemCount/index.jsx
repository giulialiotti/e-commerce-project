import React from 'react';
import {
   HStack,
   Button,
   Input,
   useNumberInput
  } from "@chakra-ui/react";

export const ItemCount = ({stock}) => {

    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
    } = useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: stock,
    })
    
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })
    
    return (
        <>
            <p>Cantidad</p>
            <HStack maxW="320px">
                <Button {...dec}>-</Button>
                <Input size="md" maxW={24} {...input} />
                <Button {...inc}>+</Button>
            </HStack>
        </>
    )
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