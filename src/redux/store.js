import { createStore } from "redux";
import sidebarReducer from "./reducers";

// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from "./feature/auth/authReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
  // other reducers...
});

const store = createStore(rootReducer);

export default store;

