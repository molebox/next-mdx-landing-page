// 1. Import the theme and merge util
import { theme as ChakraTheme } from "@chakra-ui/core"
import { merge } from "@chakra-ui/utils"

// 2. Extend the theme to include custom colors, fonts, etc.
export const theme = merge(ChakraTheme, {
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Roboto',
        bg: "brand.grey"
      },
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '100px',
    '7xl': '150px',
    '8xl': '175px',
    '9xl': '200px',
    'huge': '250px'
  },
  colors: {
    brand: {
      orange: '#f14011',
      black:  '#000000',
      grey:   '#dee0d4',
    },
  },
})