/* eslint-disable no-unused-vars */
import { api } from '../../api/hostApi'
import { createStandaloneToast } from '@chakra-ui/react'

const { toast } = createStandaloneToast();

export const addedNewCourier = (accessToken, data) => {
  return (dispatch) => {
    console.log(data)
    const url = `${api}/api/couriers/addCourier`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle success here
          response.json().then((res) => {
            dispatch({
              type: 'COURIER_ADDED_SUCCESS',
              payload: res.data,
            })
            toast({
              title: 'Successfully add Courier',
              description: response.message,
              position: 'top-right',
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          })
          // Modify this part as needed for successful response
        } else if (response.status === 401) {
          dispatch({
            type: 'UNAUTHORIZED',
          })
          toast({
            title: 'INVALID_ACCESS_TOKEN',
            position: 'top-right',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        } else if (response.status === 500) {
          dispatch({
            type: 'INTERNAL_SERVER_ERROR',
          })
          toast({
            title: 'Something went wrong !',
            description: response.message,
            position: 'top-right',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        // Handle fetch error here
        dispatch({
          type: 'COURIER_ADD_ERROR',
        });
        toast({
          title: 'Error Adding Courier',
          description: error.message,
          position: 'top-right',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
};


export const getAllCouriers = (accessToken) => {
  return (dispatch) => {
    const url = `${api}/api/couriers/getCouriers`;
    fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          
          response.json().then((res) => {
            dispatch({
              type: 'COURIERS_FETCHED_SUCCESSFULLY',
              payload: res.data,
            });
            toast({
              title: 'Couriers Fetched Successfully',
              position: 'top-right',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
          });
        } else {
          dispatch({
            type: 'COURIERS_FETCH_ERROR',
          });
          toast({
            title: 'Error Fetching Couriers',
            position: 'top-right',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: 'COURIERS_FETCH_ERROR',
        });
        toast({
          title: 'Error Fetching Couriers',
          description: error.message,
          position: 'top-right',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
};
