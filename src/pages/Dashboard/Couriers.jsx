import { Box, HStack } from "@chakra-ui/react"
import CourierTable from "../../components/Table/CourierTable"
import AddedCourier from "../../components/Dashboard/AddedCourier"

function Couriers() {
    
  return (
    <Box w="full">
        <HStack mb={5}>
            <AddedCourier/>
        </HStack>
        <CourierTable/>
    </Box>
  )
}

export default Couriers