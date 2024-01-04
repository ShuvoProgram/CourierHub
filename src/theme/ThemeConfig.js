import { extendTheme } from '@chakra-ui/react';
import { styles } from './styles';

const theme = extendTheme(styles,{
  colors: {
    teal: {
      900: '#134e4a',
      800: '#115e59',
      700: '#0f766e',
      600: '#0d9488',
      500: '#14b8a6',
      400: '#2dd4bf',
      300: '#5eead4',
      200: '#99f6e4',
      100: '#ccfbf1',
      50: '#f0fdfa',
    },
  },
});

export default theme;
