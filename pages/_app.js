import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider, Text, UnorderedList, ListItem } from "@chakra-ui/core"
import { theme } from './../theme';
import Header from './../src/components/header';
import HeaderText from './../src/components/header-text';
import Section from './../src/components/section';
import Layout from './../src/components/layout';

const components = {
  h1: (props) => (
    <Text fontSize="2xl" mb={3}>
      {props.children}
    </Text>
  ),
  h2: (props) => (
    <Text fontSize="xl" my={3}>
      {props.children}
    </Text>
  ),
  h3: (props) => (
    <Text fontSize="md" my={3}>
      {props.children}
    </Text>
  ),
  ul: (props) => <UnorderedList my={2}>{props.children}</UnorderedList>,
  li: (props) => <ListItem>{props.children}</ListItem>,
  p: (props) => <Text my={2}>{props.children}</Text>,
  Header,
  HeaderText,
  Section,
  Layout
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
