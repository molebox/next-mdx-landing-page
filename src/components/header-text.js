import { Text } from '@chakra-ui/core';
import React from 'react';

const HeaderText = ({children}) => {
    return (
        <Text textTransform="uppercase" color="brand.grey" fontSize={["md", "1xl", "2xl"]}>{children}</Text>
    )
}

export default HeaderText;