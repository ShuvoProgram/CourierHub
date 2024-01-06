import { combineReducers } from 'redux';
import sidebarReducer from './feature/sidebar/sidebarReducer';
import authReducer from './feature/auth/authReducer';
import courierReducer from './feature/courier/courierReducer';

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    auth: authReducer,
   courier: courierReducer
  });

export default rootReducer;