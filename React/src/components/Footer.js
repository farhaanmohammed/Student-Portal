import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function  Footer  ()  {
    const currentYear = new Date().getFullYear();

    return (
        <Box
        as="footer"
        p={4}
        textAlign="center"
        bg="f0f7f4"
        color="#008080"
        borderTopRadius='xl' 
        
        width="100%"
        mt="auto"
        >
        <Text>&copy; {currentYear} Student Information Portal. All rights reserved.</Text>
        </Box>
    );
};


