import { Box, HStack } from "@chakra-ui/react"
import CourierTable from "../../../components/Table/CourierTable"
import AddedCourier from "../../../components/Dashboard/AddedCourier"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { getAllCouriers } from "../../../redux/feature/courier/courierActions";
import { getRowsList } from "../../../utils/helpers";
// import SearchForm from "../../../components/Form/SearchForm/SearchForm"
// import Demofilter from "../../../components/Demofilter"

function Couriers() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCouriers(state.auth.accessToken))
  }, [state.auth.accessToken, dispatch])

  // const [courierRowsList, setCourierRowsList] = useState(getRowsList(state.courier.couriers))

  // useEffect(() => {
  //   setCourierRowsList(getRowsList(state.courier.couriers))
  // }, [state])

  // const [rows, setRows] = useState(courierRowsList);

  // useEffect(() => {
  //   setRows(courierRowsList)
  // }, [courierRowsList])
  // console.log(rows);
  return (
    <Box w="full">
        <HStack mb={5}>
          {/* <SearchForm placeholder={`Reference ID`}/> */}
            <AddedCourier/>
        </HStack>
        <CourierTable/>
    </Box>
  )
}

export default Couriers