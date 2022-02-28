import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    blackAlpha: {
      800: "#000000bc"
    },
    gray: {
      "200": "#F5F8FA",
      "400": "#DADADA",
      "500": "#999999",
      "700": "#47585B;",
    },
    yellow: {
      "100": "rgba(255, 186, 8, 0.5)",
      "400": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.700'
      }
    }
  }
})

