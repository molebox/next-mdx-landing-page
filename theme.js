// 1. Import the theme and merge util
import { theme as ChakraTheme } from "@chakra-ui/core"
import { merge } from "@chakra-ui/utils"

// 2. Extend the theme to include custom colors, fonts, etc.
export const theme = merge(ChakraTheme, {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
})