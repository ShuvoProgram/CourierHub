import { SET_TOGGLE, SET_TOGGLE_NAVBAR } from "./actions";

const initialState = {
    toggle: true,
    toggleNavbar: true,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TOGGLE:
        return { ...state, toggle: action.payload };
  
      case SET_TOGGLE_NAVBAR:
        return { ...state, toggleNavbar: action.payload };
  
      default:
        return state;
    }
  };