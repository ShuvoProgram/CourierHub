/* eslint-disable react/prop-types */
import NavItem from './NavItem';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SidebarContent({ onClose, ...rest }) {

  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        {/* <Image src={logo} /> */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <NavItem key={1} icon={``} url={`#`}>
          Products
        </NavItem>
    </Box>
  );
}
