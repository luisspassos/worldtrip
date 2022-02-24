import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "200": "#F5F8FA",
      "400": "#DADADA",
      "700": "#47585B;",
    },
    yellow: {
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
        color: 'gray.200'
      }
    }
  }
})

