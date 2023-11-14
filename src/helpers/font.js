import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'baumans'`,
    body: ` baumans`,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false, 
  },
})

export default theme