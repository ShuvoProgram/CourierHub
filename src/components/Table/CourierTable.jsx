/* eslint-disable react/prop-types */
import { Badge, SimpleGrid, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import moment from 'moment';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { BsFiletypePdf } from "react-icons/bs";
import IconButton from "../Buttons/IconButton";
import { createPdf } from "../../utils/helpers";

function CourierTable({ tableData }) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs
  console.log(tableData);
  return (
    <SimpleGrid bg='white' p={5} shadow='lg' borderRadius='lg' overflowX='auto'>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>ReferenceID</Th>
            <Th>Item Name</Th>
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
          {tableData.map((data, index) => {
            const { id, item, weight, sender, receiver, Status, updatedDate} = data;
            return (
              <Tr key={index}>
                <Td>{id}</Td>
                <Td>{item}</Td>
                <Td>{weight}</Td>
                <Td>{sender?.name}</Td>
                <Td>{receiver?.name}</Td>
                <Td textAlign="center" alignItems="center">
                  <Badge textAlign="center" colorScheme={'green'} h="30px" w="50px">
                    {Status}
                  </Badge>
                </Td>
                <Td>
                {moment(updatedDate).format("DD MM YYYY hh:mm:ss")}
              
                </Td>
                <Td>
                <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={BsFiletypePdf}
                      onClick={() => createPdf(data)}
                    />
                </Td>
               
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </SimpleGrid>
  )
}

export default CourierTable;