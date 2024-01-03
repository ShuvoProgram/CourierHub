
import { FaShoppingCart, FaRupeeSign } from 'react-icons/fa';
import { MdPendingActions, MdDeliveryDining } from 'react-icons/md';
import {
  Flex,
  Icon,
  Square,
  Spacer,
  Text,
  Heading,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { formatPrice } from '../utils/helpers';

function DashboardCards() {

  const cardList = [
    {
      title: 'Total Orders',
      value: 24,
      icon: FaShoppingCart,
      color: 'brown.500',
    },
    {
      title: 'Pending Orders',
      value: 10,
      icon: MdPendingActions,
      color: 'red.500',
    },
    {
      title: 'Delivered Orders',
      value: 100,
      icon: MdDeliveryDining,
      color: 'blue.500',
    },
    {
      title: 'Total Revenue',
      value: formatPrice(40),
      icon: FaRupeeSign,
      color: 'green.500',
    },
  ];

  return (
    <SimpleGrid minChildWidth='250px' spacing={5} mb={5}>
      {cardList.map((card, index) => {
        const { title, value, icon, color } = card;
        return (
          <Flex
            key={index}
            shadow='lg'
            bg='white'
            p='5'
            borderRadius='lg'
            justifyContent='center'
          >
            <Box>
              <Text fontSize='1xl' color='gray.500'>
                {title}
              </Text>
              <Heading size='lg' color={color}>
                {value}
              </Heading>
            </Box>
            <Spacer />
            <Square size='60px' bg='brown.400' borderRadius='lg'>
              <Icon as={icon} color='white' />
            </Square>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
}

export default DashboardCards;
