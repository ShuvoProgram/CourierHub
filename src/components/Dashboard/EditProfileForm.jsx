/* eslint-disable react/prop-types */
import {
    FormControl,
    FormLabel,
    Input,
    Flex,
} from '@chakra-ui/react';

function EditProfileForm() {

    return (
        <>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='name' />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Contact No</FormLabel>
                <Input type='text' placeholder='Contact No' />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input type='text' placeholder='Location' />
            </FormControl>
         <Flex columnGap={4}>
         <FormControl mt={4}>
                <FormLabel>Country</FormLabel>
                <Input type='text' placeholder='Country' />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>State</FormLabel>
                <Input type='text' placeholder='State' />
            </FormControl>
         </Flex>
            <Flex columnGap={4}>
                <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input type='text' placeholder='City' />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Pin Code</FormLabel>
                    <Input type='text' placeholder='Pin Code' />
                </FormControl>
            </Flex>

        </>
    )
}

export default EditProfileForm;