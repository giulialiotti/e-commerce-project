import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { generateOrder } from '../../firebase/generateOrder';
import { Button } from '@chakra-ui/button';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
  } from "@chakra-ui/react";
import Swal from 'sweetalert2';

export const Checkout = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: 0,
    });

    const { cart, totalCartPrice, emptyCart } = useContext(CartContext);

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
        if (formValues.name !== '' && formValues.lastname !== '' && formValues.email !== '' ) {
            generateOrder(formValues, cart, totalCartPrice())
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your purchase was successful!',
                        text: `Save your purchase ID: ${res}`,
                        confirmButtonText: 'Go back',
                        iconColor: 'var(--cream)',
                        confirmButtonColor: 'var(--cream)'
                    });

                    emptyCart();
                })
                .catch(err => console.log(err)) 
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid fields!',
                iconColor: 'var(--red)',
                confirmButtonColor: 'var(--red)'
              })
        }
    };

    return (
        <Box p={["0 1.5rem 5rem", "0 4rem 5rem", "0 8rem 5rem"]} as='section'>
            <h2 className="cart-container-title">ENTER YOUR SHIPPING DETAILS</h2>
            {/* Add cart info */}
            {!cart.length 
                ? <Redirect to="/"/>
                : 
                <FormControl width={['100%', '100%', '60%']} margin='0 auto' isRequired>
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

                    <Box width='100%' mt='10'>
                        <h3 className="cart-container-product-title text-right">TOTAL: ${totalCartPrice()}</h3>
                    </Box>

                    <Button type="submit" bg="var(--cream)" color="white" size="md" mt='5' position='absolute' right='0' onClick={handleSubmit}>
                        Generate order
                    </Button>                
                </FormControl>
            }
        </Box>
    )
}