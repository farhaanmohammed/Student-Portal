import React from 'react';
import { Box, Flex, Link,Image } from '@chakra-ui/react';
import websiteImage from '../assets/school-icon.png'




export default function Navbar  ()  {
    return (
        <Box bg="#f0f7f4" color="#354c50" p={4} borderBottomRadius={'xl'} boxShadow={'-moz-initial'}>
            <Flex justify="space-between" align="center">
                
                <Image
                    marginLeft={5}
                    boxSize='60px'
                    objectFit='cover'
                    src={websiteImage}
                    alt='Schhol icon'
                />
                
                <Flex align="center" marginRight={5}>
                    <Link href="#" marginRight={7} color="#008080" _hover={{ textDecoration: 'none' }} fontWeight={'bold'}>
                        Home
                    </Link>
                    <Link href="#" marginRight={7} color="#008080" _hover={{ textDecoration: 'none' }} fontWeight={'bold'}>
                        About
                    </Link>
                    <Link href="#" color="#008080" _hover={{ textDecoration: 'none' }} fontWeight={'bold'}>
                        Contact
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};


