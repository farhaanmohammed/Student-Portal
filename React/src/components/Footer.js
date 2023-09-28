import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
        as="footer"
        p={4}
        textAlign="center"
        bg="f0f7f4"
        color="#008080"
        borderTopRadius='xl' // Add border radius for a card-like appearance
        
        width="100%"
        mt="auto"
        >
        <Text>&copy; {currentYear} Student Information Portal. All rights reserved.</Text>
        </Box>
    );
};

export default Footer;
