import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider, Text, UnorderedList, ListItem } from "@chakra-ui/core"
import { theme } from './../theme';

const components = {
  h1: (props) => (
    <Text fontSize="2xl" mb={3}>
      {props.children}
    </Text>
  ),
  h2: (props) => (
    <Text fontSize="1xl" my={3}>
      {props.children}
    </Text>
  ),
  h3: (props) => (
    <Text fontSize="xl" my={3}>
      {props.children}
    </Text>
  ),
  ul: (props) => <UnorderedList my={2}>{props.children}</UnorderedList>,
  li: (props) => <ListItem>{props.children}</ListItem>,
  p: (props) => <Text my={2}>{props.children}</Text>
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <MDXProvider components={components}>
          <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
