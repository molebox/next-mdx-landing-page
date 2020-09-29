import { Grid } from '@chakra-ui/core';
import React from 'react';

const Layout = ({children}) => {

    return (
        <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="10% 25% 20% 35% 1fr"
        gap={4}
        bg="brand.grey"
        h="100vh"
        w="100%"
        border="solid 10px"
        borderColor="brand.grey"
        maxW="1000px"
        m="0 auto"
        >
            {children}
        </Grid>
    )
}

export default Layout;