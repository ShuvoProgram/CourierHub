import { Box, HStack, Input, Skeleton } from "@chakra-ui/react";
import CourierTable from "../../../components/Table/CourierTable";
import AddedCourier from "../../../components/Dashboard/AddedCourier";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCouriers } from "../../../redux/feature/courier/courierActions";
import { getRowsList } from "../../../utils/helpers";

import SearchForm from "../../../components/Form/SearchForm/SearchForm";
import './Couriers.css'

function Couriers() {
  
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    dispatch(getAllCouriers(state.auth.accessToken));
  }, [dispatch, state.auth.accessToken]);

  useEffect(() => {
    const courierData = state.courier.couriers;
    if (courierData && courierData.length > 0) {
      setIsLoading(false);
    }
  }, [state.courier.couriers]);

  useEffect(() => {
    if (!isLoading) {
      setRows(getRowsList(state.courier.couriers));
    }
  }, [isLoading, state.courier.couriers]);

  const [courierRowsList, setCourierRowsList] = useState([]);

  useEffect(() => {
    setCourierRowsList(getRowsList(state.courier.couriers));
  }, [state]);

  const [rows, setRows] = useState(courierRowsList);

  const refIdSearch = (event) => {
    const searchedId = event.target.value
    if (searchedId.length === 0) {
      setRows(courierRowsList)
      return
    }
    const newRows = courierRowsList.filter((courier) => {
      return courier.id === searchedId
    })
    setRows(newRows)
  }

  const emailIdSearch = (event) => {
    const searchedEmail = event.target.value
    if (searchedEmail.length === 0) {
      setRows(courierRowsList)
      return
    }
    const newRows = courierRowsList.filter((courier) => {
      return (
        courier.sender.email === searchedEmail ||
        courier.receiver.email === searchedEmail
      )
    })
    setRows(newRows)
  }

  const dateSearch = (event) => {
    const eventId = event.target.id
    var startDate, endDate
    if (eventId === 'startDate') {
      startDate = event.target.value
    } else {
      endDate = event.target.value
    }

    if (startDate && endDate) {
      const newRows = courierRowsList.filter((courier) => {
        const sDate = new Date(startDate)
        const eDate = new Date(endDate)
        const uDate = new Date(courier.updatedDate)

        return uDate >= sDate && uDate <= eDate
      })

      setRows(newRows)
    } else if (startDate && !endDate) {
      const newRows = courierRowsList.filter((courier) => {
        const sDate = new Date(startDate)
        const uDate = new Date(courier.updatedDate)

        return uDate >= sDate
      })

      setRows(newRows)
    } else if (endDate && !startDate) {
      const newRows = courierRowsList.filter((courier) => {
        const eDate = new Date(endDate)
        const uDate = new Date(courier.updatedDate)

        return uDate <= eDate
      })

      setRows(newRows)
    } else {
      setRows(courierRowsList)
    }
  }

  return (
    <Box w="full">
      <HStack mb={5}>
        <SearchForm placeholder={`Reference ID`} onChange={refIdSearch} />
        <SearchForm placeholder={`Email`} onChange={emailIdSearch} />
        <Input
          placeholder="Select Date and Time"
          id="startDate"
          size="md"
          type="date"
          className="!w-[80%] md:!w-[25%]"
          onChange={dateSearch}
        />
        <Input
          placeholder="Select Date and Time"
          id="endDate"
          size="md"
          className="!w-[80%] md:!w-[25%]"
          type="date"
          onChange={dateSearch}
        />
      </HStack>
        <HStack mb={5}>
        <AddedCourier />
        </HStack>
      {isLoading ? (
        <Skeleton height='20px' />
      ) : (
        <CourierTable tableData={rows} />
      )}
    </Box>
  );
}

export default Couriers;
