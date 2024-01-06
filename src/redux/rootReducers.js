import { combineReducers } from 'redux';
import sidebarReducer from './feature/sidebar/sidebarReducer';
import authReducer from './feature/auth/authReducer';

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    auth: authReducer,
   
  });

export default rootReducer;