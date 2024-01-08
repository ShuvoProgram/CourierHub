import { HStack, InputGroup, InputRightElement, ModalOverlay } from '@chakra-ui/react';
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
import { useEffect, useState } from 'react';
import DepartmentSIgnUpForm from '../../components/Form/DepartmentSIgnUpForm';
import FormModal from '../../components/Modal/FormModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/feature/auth/authAction';

function SIgnIn() {
  const { accessToken } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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

    const handleLogin = (event) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      const registrationNumber = data.get('registrationNumber')
      const password = data.get('password')
  
      const credentials = {
        registrationNumber: registrationNumber,
        password: password,
      }

      dispatch(login(credentials))
    }

    useEffect(() => {
      if(accessToken) {
        navigate('/dashboard/department')
      }
    }, [accessToken, navigate])

      const [overlay, setOverlay] = useState(<OverlayOne />)
  return (
    <Flex minH={'100vh'} minW={'100vw'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={logo} alt='logo' w='50%' />
        </Stack>
        <Box bg={'white'} rounded={'lg'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleLogin}>
            <FormControl id='email'>
              <FormLabel>Registration Number</FormLabel>
              <Input
                type='text'
                placeholder='Registration Number'
                variant='filled'
                focusBorderColor='teal.500'
                name='registrationNumber'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        name='password' placeholder='Password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl mt={4}>
                <Button type='submit' h="40px" w="400px" colorScheme='teal'>Sign In</Button>
            </FormControl>
            </form>
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