import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from "@chakra-ui/core"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <MDXProvider>
          <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
