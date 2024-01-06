import { HStack, ModalOverlay, useToast } from '@chakra-ui/react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Image,
  } from '@chakra-ui/react';
import logo from '../../assets/corierHub_logo.png';
import { useState } from 'react';
import DepartmentSIgnUpForm from '../../components/Form/DepartmentSIgnUpForm';
import FormModal from '../../components/Modal/FormModal';

function SIgnIn() {
  const [isOpen, setIsOpen] = useState(false);

  
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )

      const openModal = () => {
        setOverlay(<OverlayOne/>)
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

     
      const [overlay, setOverlay] = useState(<OverlayOne />)
  return (
    <Flex minH={'100vh'} minW={'100vw'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={logo} alt='logo' w='50%' />
        </Stack>
        <Box bg={'white'} rounded={'lg'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                placeholder='Enter your email address'
                variant='filled'
                focusBorderColor='teal.500'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='Enter your password'
                variant='filled'
                focusBorderColor='teal.500'
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                // isLoading={loading}
                bg={'teal.600'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
                }}
                // onClick={handleSubmit}
              >
                Login
              </Button>
            </Stack>
            <HStack>
              <a href={'javascript:[0]'} className='hover:text-teal-500' onClick={openModal}>Create An Account</a>
            </HStack>
          </Stack>
        </Box>
      </Stack>
      <FormModal
        isOpen={isOpen}
        onClose={closeModal}
        overlay={overlay}
        modalTitle="Create an account !" 
        modalContent={<DepartmentSIgnUpForm />}
        buttonText="Close"
        modalSize="xl"
      />
    </Flex>
  )
}

export default SIgnIn;