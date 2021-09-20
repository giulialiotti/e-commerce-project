import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { generateOrder } from '../../firebase/generateOrder';
import { Button } from '@chakra-ui/button';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon
  } from "@chakra-ui/react"

export const Checkout = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: 0,
    });

    const { cart, totalCartPrice } = useContext(CartContext);

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cart);
        console.log(formValues);
        // Add: generate order only if form values are correct
        generateOrder(formValues, cart, totalCartPrice());
    };

    console.log('cart', cart)

    return (
        <Box p='5% 10%'>
            <h1>Checkout</h1>
            {/* Add cart info */}
            {!cart.length 
                ? <h3>There's no items on the cart</h3>
                : 
                <FormControl width={['100%', '40%']} isRequired>
                    <FormLabel mt='5'>First name</FormLabel>
                    <Input placeholder="First name" type='text' name='name' value={formValues.name} onChange={handleInputChange} />                    
                    
                    <FormLabel mt='5'>Last name</FormLabel>
                    <Input placeholder="Last name" type='text' name='lastname' value={formValues.lastname} onChange={handleInputChange} />
                    
                    <FormLabel mt='5'>Email address</FormLabel>
                    <Input placeholder="Your email" type="email" name='email' value={formValues.email} onChange={handleInputChange}/>
                    
                    <FormLabel mt='5'>Phone number</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children="+234" />
                        <Input type="tel" placeholder="Your phone number" name='phone' value={formValues.phone} onChange={handleInputChange} />
                    </InputGroup>

                    <Button type="submit" bg="var(--cream)" color="white" size="md" mt='5' onClick={handleSubmit}>
                        Generate order
                    </Button>                
                </FormControl>
            }
        </Box>
    )
}
