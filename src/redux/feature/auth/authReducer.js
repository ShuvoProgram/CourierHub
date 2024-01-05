const initState = {
    error: null,
    accessToken: null,
    department: null,
    deliveryAgent: null,
  }
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case 'INVALID_PASSWORD':
        return {
          ...state,
          error: 'Incorrect Password',
          accessToken: null,
          department: null,
          deliveryAgent: null,
        }
      case 'REGISTER_REQUEST_ERROR':
        return {
          ...state,
          error: 'Login Failed',
          accessToken: null,
          department: null,
          deliveryAgent: null,
        }
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          accessToken: action.payload,
          error: null,
          department: null,
          deliveryAgent: null,
        }
  
      case 'REGISTER_FAILURE':
        return {
          ...state,
          accessToken: null,
          error: action.payload.message,
          department: null,
          deliveryAgent: null,
        }
      case 'UNAUTHORIZED':
        return {
          ...state,
          error: 'Unauthorized',
          department: null,
          deliveryAgent: null,
        }
      case 'INVALID_ACCESS_TOKEN':
        return {
          ...state,
          error: 'INVALID ACCESS TOKEN',
          department: null,
          deliveryAgent: null,
        }
      case 'LOGOUT':
        return {
          ...state,
          accessToken: null,
          error: null,
          department: null,
          deliveryAgent: null,
        }
      default:
        return state
    }
  }
  
  export default authReducer
  