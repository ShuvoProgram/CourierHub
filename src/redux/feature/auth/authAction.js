/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createStandaloneToast } from '@chakra-ui/react'
import { api } from '../../api/hostApi'

const { toast } = createStandaloneToast();

export const login = (credential) => {
  return (dispatch) => {
    const url = `${api}/api/departments/loginDepartment`
    fetch(url, {
      method: 'post',
      body: JSON.stringify({
        registrationNumber: credential.registrationNumber,
        password: credential.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 404) {
          dispatch({
            type: 'DEPARTMENT_NOT_FOUND',
          })
          toast({
            title: 'Department not found with given credentials',
            description: response.message,
            position: 'top-right',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
         
        } else if (response.status === 401) {
          dispatch({
            type: 'INVALID_PASSWORD',
          })
          toast({
            title: 'Invalid Password',
            position: 'top-right',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          
        } else if (response.status === 200) {
          response.json().then((res) => {
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: res.data.accessToken,
            })
            toast({
              title: 'Successfully logged in',
              description: res.message,
              position: 'success',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: 'LOGIN_REQUEST_ERROR',
        })
      })
  }
}

export const register = (details) => {
 
    return (dispatch) => {
      const url = `${api}/api/departments/addDepartment`
      fetch(url, {
        method: 'post',
        body: JSON.stringify({
          name: details.name,
          country: details.country,
          pinCode: details.pinCode,
          state: details.state,
          city: details.city,
          password: details.password,
          contactNumber: details.contactNumber,
          contactEmail: details.contactEmail,
          registrationNumber: details.registrationNumber,
          location: details.location,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 400) {
            response.json().then((res) => {
              dispatch({
                type: 'REGISTER_FAILURE',
                payload: res,
              })
              toast({
                title: 'An error occurred.',
                description: res.message,
                position: 'top-right',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            })
          } else if (response.status === 201) {
            response.json().then((res) => {
              dispatch({
                type: 'REGISTER_SUCCESS',
                payload: res.data.accessToken,
              })
              toast({
                title: 'Successfully Created.',
                description: res.message,
                position: 'top-right',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            })
          }
        })
        .catch((error) => {
          dispatch({
            type: 'REGISTER_REQUEST_ERROR',
          })
        })
    }
  }

  export const getDepartmentInfo = (accessToken) => {
    console.log(accessToken);
    return (dispatch) => {
      const url = `${api}/api/departments/getDepartmentInfo`;
      fetch(url, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (response.status === 404) {
            dispatch({
              type: 'DEPARTMENT_NOT_FOUND',
            })
            toast({
              title: 'Department not found with given credentials.',
              description: response.message,
              position: 'top-right',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          } else if (response.status === 401) {
            dispatch({
              type: 'UNAUTHORIZED',
            })
            toast({
              title: 'Unauthorized',
              description: response.message,
              position: 'top-right',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
           
          } else if (response.status === 403) {
            dispatch({
              type: 'INVALID_ACCESS_TOKEN',
            })
            toast({
              title: 'Invalid access token',
              description: response.message,
              position: 'top-right',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
            
          } else if (response.status === 200) {
            response.json().then((res) => {
              dispatch({
                type: 'PROFILE_FETCH_SUCCESS',
                payload: res.data,
              })
            })
          }
        })
        .catch((error) => {
          dispatch({
            type: 'PROFILE_FETCH_ERROR',
            payload: 'Something went wrong !',
          })
          toast({
            title: 'Something went wrong !',
            description: error.message,
            position: 'top-right',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
         
        })
    }
  }

  export const updateDepartmentInfo = (accessToken, details) => {
    return (dispatch) => {
      const url = `${api}/api/departments/updateDepartmentInfo`
      fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
          name: details.name,
          country: details.country,
          pinCode: details.pinCode,
          state: details.state,
          city: details.city,
          password: details.password,
          contactNumber: details.contactNumber,
          contactEmail: details.contactEmail,
          location: details.location,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (response.status === 404) {
            dispatch({
              type: 'DEPARTMENT_NOT_FOUND',
            })
            toast({
              title: 'Department not found with given credentials.',
              description: response.message,
              position: 'top-right',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
            
          } else if (response.status === 401) {
            dispatch({
              type: 'UNAUTHORIZED',
            })
            toast({
              title: 'Unauthorized',
              description: response.message,
              position: 'top-right',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
            
          } else if (response.status === 403) {
            dispatch({
              type: 'INVALID_ACCESS_TOKEN',
            })
            toast({
              title: 'Invalid access token',
              description: response.message,
              position: 'top-right',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
            
          } else if (response.status === 200) {
            response.json().then((res) => {
              dispatch({
                type: 'PROFILE_UPDATE_SUCCESS',
                payload: res.data,
              })
            })
          }
        })
        .catch((error) => {
          dispatch({
            type: 'PROFILE_FETCH_ERROR',
            payload: 'Something went wrong !',
          })
          toast({
            title: 'Something went wrong !',
            description: error.message,
            position: 'top-right',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          
        })
    }
  }

  export const loginDeliveryAgent = (credential) => {
    return (dispatch) => {
      const url = `${apiHost}/api/deliveryAgents/loginDeliveryAgent`
      fetch(url, {
        method: 'post',
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 404) {
            dispatch({
              type: 'DELIVERYAGENT_NOT_FOUND',
            })
            toast.error('Delivery agent not found with given credentials', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            })
          } else if (response.status === 401) {
            dispatch({
              type: 'INVALID_PASSWORD',
            })
            toast.error('Invalid Password', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            })
          } else if (response.status === 200) {
            response.json().then((res) => {
              dispatch({
                type: 'DELIVERY_AGENT_LOGIN_SUCCESS',
                payload: res.data,
              })
            })
          }
        })
        .catch((error) => {
          dispatch({
            type: 'LOGIN_REQUEST_ERROR',
          })
        })
    }
  }

  export const logout = () => {
    return (dispatch) => {
      dispatch({
        type: 'LOGOUT',
      })
    }
  }