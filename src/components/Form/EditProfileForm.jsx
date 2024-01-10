/* eslint-disable react/prop-types */
import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Button,
} from '@chakra-ui/react';
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { updateDepartmentInfo } from '../../redux/feature/auth/authAction';

function EditProfileForm() {
    const departmentInitialValues = useSelector((state) => state.auth.department)
    const state = useSelector((state) => state)
    const dispatch = useDispatch();

    const handleFormSubmit = (updatedDepartmentValue) => {
        dispatch(
          updateDepartmentInfo(state.auth.accessToken, updatedDepartmentValue)
        )
      }

      const checkoutSchema = yup.object().shape({
        name: yup.string().required('required'),
        registrationNumber: yup.string().required('required'),
        contactEmail: yup.string().email('invalid email').required('required'),
        contactNumber: yup
          .string()
        //   .matches(phoneRegExp, 'Phone number is not valid')
          .required('required'),
        location: yup.string().required('required'),
        country: yup.string().required('required'),
        state: yup.string().required('required'),
        city: yup.string().required('required'),
        pinCode: yup.number().required('required'),
      })

    return (
        <>
        <Formik 
        onSubmit={handleFormSubmit}
        initialValues={departmentInitialValues}
        validationSchema={checkoutSchema}
        >
            {({
                 values,
                 handleBlur,
                 handleChange,
                 handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <FormControl>
                <FormLabel>Name</FormLabel>
                <Input 
                type='text'
                label='Name'
                name='name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                
                // error={!!touched.name && !!errors.name}
                // helperText={touched.name && errors.name}
                />
            </FormControl>
                    <FormControl>
                <FormLabel>Registration Number</FormLabel>
                <Input 
                type='text'
                label='Registration Number'
                name='registrationNumber'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.registrationNumber}
                
                />
            </FormControl>
                    <FormControl>
                <FormLabel>Email</FormLabel>
                <Input 
                type='text'
                label='Email'
                name='contactEmail'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactEmail}
                
                />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Contact No</FormLabel>
                <Input 
                type='text' 
                placeholder='Contact No' 
                label='Contact Number'
                name='contactNumber'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactNumber}
                />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input type='text'
                 placeholder='Location'
                 label='Location'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                name='location'
                 />
            </FormControl>
         <Flex columnGap={4}>
         <FormControl mt={4}>
                <FormLabel>Country</FormLabel>
                <Input type='text'
                 placeholder='Country'
                 label='Country'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name='country'
                 />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>State</FormLabel>
                <Input type='text'
                 placeholder='State'
                 label='State'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                name='state'
                 />
            </FormControl>
         </Flex>
            <Flex columnGap={4}>
                <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input type='text'
                     placeholder='City'
                     label='City'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name='city'
                     />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Pin Code</FormLabel>
                    <Input type='text'
                     placeholder='Pin Code'
                     label='Pincode'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pinCode}
                name='pinCode'
                     />
                </FormControl>
            </Flex>
            <FormControl mt={4}>
                <Button 
                type='submit'
                 h="40px" w="200px" 
                 colorScheme='teal'
                 disabled={values === departmentInitialValues}
                 >Update</Button>
            </FormControl>
                </form>
            )}
        </Formik>
        </>
    )
}

export default EditProfileForm;