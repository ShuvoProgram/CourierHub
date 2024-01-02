export const SET_TOGGLE = "SET_TOGGLE";
export const SET_TOGGLE_NAVBAR = "SET_TOGGLE_NAVBAR";

export const setToggle = (payload) => ({
  type: SET_TOGGLE,
  payload,
});

export const setToggleNavbar = (payload) => ({
  type: SET_TOGGLE_NAVBAR,
  payload,
});