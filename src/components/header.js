import { Flex } from '@chakra-ui/core';
import React from 'react';

const Header = ({children}) => {
    return (
        <Flex bg="brand.black" color="brand.grey" as="header" justify="space-evenly" alignItems="flex-end" p={3} w="100%" gridRow="1" gridColumn="1 / -1">
            {children}
        </Flex>
    )
}

export default Header;