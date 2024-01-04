import { createStore } from "redux";
import sidebarReducer from "./reducers";

// rootReducer.js
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  // other reducers...
});

const store = createStore(rootReducer);

export default store;

