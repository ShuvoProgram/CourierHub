const initState = {
  couriers: null,
  error: null,
}

const courierReducer = (state = initState, action) => {
  switch (action.type) {
    case 'COURIERS_FETCHED_SUCCESSFULLY':
      return {
        ...state,
        couriers: action.payload,
        error: null,
      }

    case 'COURIERS_FETCH_ERROR':
      return {
        ...state,
        couriers: null,
        error: 'Error fetching couriers!',
      }

    case 'COURIER_ADDED_SUCCESS':
      return {
        ...state,
        couriers: action.payload,
        error: null,
      }

    case 'COURIER_ADD_ERROR':
      return {
        ...state,
        error: 'Error adding new courier!',
      }

    case 'UNAUTHORIZED':
      return {
        ...state,
        error: 'Unauthorized access!',
      }

    case 'INTERNAL_SERVER_ERROR':
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default courierReducer
