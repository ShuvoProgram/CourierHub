import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Button,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/feature/auth/authAction';

function DepartmentSIgnUpForm() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const password = data.get('password')
        const departmentName = data.get('departmentName');
        const registrationNumber = data.get('registrationNumber')
        const phone = data.get('phone')
        const address = data.get('address')
        const city = data.get('city')
        const state = data.get('state')
        const country = data.get('country')
        const pinCode = data.get('pincode')

        const details = {
            name: departmentName,
            country: country,
            pinCode: pinCode,
            state: state,
            city: city,
            password: password,
            contactNumber: phone,
            contactEmail: email,
            registrationNumber: registrationNumber,
            location: address,
        }

        // console.log(details);
        dispatch(register(details))
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Department Name</FormLabel>
                <Input type='text' name='departmentName' placeholder='Department Name' />
            </FormControl>
            <FormControl>
                <FormLabel>Registration Number</FormLabel>
                <Input type='text' name='registrationNumber' placeholder='Registration Number' />
            </FormControl>
            <Flex columnGap={4}>
            <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input type='email' name='email' placeholder='Email Address' />
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
            </Flex>
            <Flex columnGap={4}>
            <FormControl mt={4}>
                <FormLabel>phone Number</FormLabel>
                <Input type='text' placeholder='phone Number' name='phone' />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input type='text' placeholder='Address' name='address' />
            </FormControl>
            </Flex>
            <Flex columnGap={4}>
                <FormControl mt={4}>
                    <FormLabel>Country</FormLabel>
                    <Input type='text' placeholder='Country' name='country' />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>State</FormLabel>
                    <Input type='text' placeholder='State' name='state' />
                </FormControl>
            </Flex>
            <Flex columnGap={4}>
                <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input type='text' placeholder='City' name='city' />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Pin Code</FormLabel>
                    <Input type='text' placeholder='Pin Code' name='pincode' />
                </FormControl>
            </Flex>
            <FormControl mt={4}>
                <Button type='submit' h="40px" w="200px" colorScheme='teal'>Sign Up</Button>
            </FormControl>
        </form>
    )
}

export default DepartmentSIgnUpForm;