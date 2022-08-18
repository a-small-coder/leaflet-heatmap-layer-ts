import { extendTheme, ChakraTheme } from '@chakra-ui/react'


const config: ChakraTheme['config'] = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export default extendTheme({ config })
