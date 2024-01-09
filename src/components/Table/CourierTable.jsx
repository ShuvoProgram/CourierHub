import { Badge, ButtonGroup, HStack, SimpleGrid, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { CourierData } from "../../dates/courierData";
import IconButton from "../Buttons/IconButton";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function CourierTable() {
  return (
    <SimpleGrid bg='white' p={5} shadow='lg' borderRadius='lg' overflowX='auto'>
      <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>ReferenceID</Th>
              <Th>Description</Th>
              <Th>Weight</Th>
              <Th>Sender</Th>
              <Th>Receiver</Th>
              <Th>Status</Th>
              <Th>UpdatedDate</Th>
              <Th>Courier Slip</Th>
              {/* <Th>Action</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {CourierData.map((data, index) => {
              const { ReferenceID, Description, Weight, Sender, Receiver, Status, UpdatedDate, courierSlip } = data;
              return (
                <Tr key={index}>
                  <Td>{ReferenceID}</Td>
                  <Td>{Description}</Td>
                  <Td>{Weight}</Td>
                  <Td>{Sender}</Td>
                  <Td>{Receiver}</Td>
                  <Td textAlign="center" alignItems="center">
                    <Badge textAlign="center" colorScheme={'green'} h="30px" w="50px">
                      {Status}
                    </Badge>
                  </Td>
                  <Td>{UpdatedDate}</Td>
                  <Td>{courierSlip}</Td>
                  {/* <Td>
                    <HStack spacing='5'>
                    <ButtonGroup variant="solid" size="sm" spacing={2}>
                    <IconButton
                      colorScheme="green"
                      icon={AiFillEdit}
                      aria-label="Edit"
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={BsFillTrashFill}
                      aria-label="Delete"
                    />
                  </ButtonGroup>
                    
                    </HStack>
                  </Td> */}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
    </SimpleGrid>
  )
}

export default CourierTable;