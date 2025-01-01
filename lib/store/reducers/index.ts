import { combineReducers } from '@reduxjs/toolkit';
import ordersReducer from './ordersSlice';
import reservationsReducer from './reservationsSlice';
import menuReducer from './menuSlice';

export const rootReducer = combineReducers({
  orders: ordersReducer,
  reservations: reservationsReducer,
  menu: menuReducer,
});