/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const api = "http://localhost:4545"

export const register = (details) => {
  console.log(details)
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
             
            })
          } else if (response.status === 201) {
            response.json().then((res) => {
              dispatch({
                type: 'REGISTER_SUCCESS',
                payload: res.data.accessToken,
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