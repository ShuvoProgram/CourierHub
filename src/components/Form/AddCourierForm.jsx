import { Box, Button, Flex, FormControl, FormLabel, Input, createStandaloneToast } from "@chakra-ui/react";
import { api } from "../../redux/api/hostApi";
import { useSelector } from "react-redux";


function AddCourierForm() {
    const { toast } = createStandaloneToast()
    const accessToken = useSelector((state) => state.auth.accessToken);
    
    const handleAddCourierForm = async (formData) => {
        formData.preventDefault();
        const data = new FormData(formData.currentTarget);
        const details = {
            receiverDetails: extractDetails(data, 'receiver'),
            senderDetails: extractDetails(data, 'sender'),
            courierDetails: {
              packageName: data.get('packageName'),
              packageWeight: data.get('packageWeight'),
            },
          };
console.log(details)
console.log('Access Token:', accessToken); // Check accessToken value in console
try {
    if (!accessToken) {
        throw new Error('Access Token not available');
      }
    const url = `${api}/api/couriers/addCourier`;
    const res = await fetch(url, {
      method: 'post',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

   console.log(res)

    if (!res.ok) {
        throw new Error('Network response was not ok.');
      }

    const status = res.status;
    const responseMessage = await res.json();

    toast({
      title: status === 200 || status === 201 ? 'Entry Successful' : 'Entry Unsuccessful',
      description: responseMessage.message || 'An error occurred',
      position: 'top-right',
      status: status === 200 || status === 201 ? 'success' : 'error',
      duration: 9000,
      isClosable: true,
    });
  } catch (error) {
    toast({
      title: 'Internal Error',
      description: 'Unable To Entry New Parcel',
      position: 'top-right',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }
};
const extractDetails = (data, type) => {
    const keys = [
      'Name',
      'Phone',
      'Email',
      'Location',
      'City',
      'State',
      'Country',
      'PinCode',
    ];

    return keys.reduce((details, key) => {
      details[`${type}${key}`] = data.get(`${type}${key}`);
      return details;
    }, {});
  };
    return (
        <form onSubmit={handleAddCourierForm}>
            <Flex columnGap={4}>
                <FormControl>
                    <FormLabel>Package Name</FormLabel>
                    <Input type='name' placeholder='Package Name' name="packageName"/>
                </FormControl>
                <FormControl>
                    <FormLabel>Package Weight</FormLabel>
                    <Input type='text' placeholder='Package Weight' name="packageWeight"/>
                </FormControl>
            </Flex>
            <Box >
                <h1 className="text-xl font-bold my-2">Receiver Details</h1>
            <FormControl mt={4}>
                <FormLabel>Receiver Name</FormLabel>
                <Input type='text' placeholder='Receiver Name' name="receiverName"/>
            </FormControl>
            <Flex columnGap={4}>
                <FormControl mt={4}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type='text' placeholder='Phone Number' name="receiverPhone"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type='text' placeholder='State' name="receiverEmail"/>
                </FormControl>
            </Flex>
            <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input type='text' placeholder='Address' name="receiverLocation"/>
            </FormControl>
            <Flex columnGap={4}>
                <FormControl mt={4}>
                    <FormLabel>Country</FormLabel>
                    <Input type='text' placeholder='Country' name="receiverCity"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>State</FormLabel>
                    <Input type='text' placeholder='State' name="receiverState"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input type='text' placeholder='City' name="receiverCountry"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Pin Code</FormLabel>
                    <Input type='text' placeholder='Pin Code' name="receiverPinCode"/>
                </FormControl>
            </Flex>
            </Box>
            <Box >
                <h1 className="text-xl font-bold my-2">Sender Details</h1>
            <FormControl mt={4}>
                <FormLabel>Sender Name</FormLabel>
                <Input type='text' placeholder='Sender Name' name="senderName"/>
            </FormControl>
            <Flex columnGap={4}>
                <FormControl mt={4}>
                    <FormLabel>Phone</FormLabel>
                    <Input type='text' placeholder='Phone' name="senderPhone"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type='text' placeholder='State' name="senderEmail"/>
                </FormControl>
            </Flex>
            <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input type='text' placeholder='Address' name="senderLocation"/>
            </FormControl>
            <Flex columnGap={4}>
                <FormControl mt={4}>
                    <FormLabel>Country</FormLabel>
                    <Input type='text' placeholder='Country' name="senderCountry"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>State</FormLabel>
                    <Input type='text' placeholder='State' name="senderState"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input type='text' placeholder='City' name="senderCity"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Pin Code</FormLabel>
                    <Input type='text' placeholder='Pin Code' name="senderPinCode"/>
                </FormControl>
            </Flex>
            </Box>
            <FormControl mt={4}>
                <Button type='submit' h="40px" w="200px" colorScheme='teal'>Added</Button>
            </FormControl>
        </form>
    )
}

export default AddCourierForm;