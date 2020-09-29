import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

const Section = ({children, ...rest}) => {

    return (
        <Flex as="section" bg="brand.orange" color="brand.black" w="100%" h="100%" p={2} {...rest}>
            <Text my={2} alignSelf="flex-end">{children}</Text>
        </Flex>
    )
}

export default Section;