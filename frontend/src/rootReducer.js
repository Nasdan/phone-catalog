import { combineReducers } from 'redux';
import { phoneListReducer } from './pages/phones/list';
import { phoneDetailReducer } from './pages/phones/detail';

export const rootReducer = combineReducers({
  phoneList: phoneListReducer,
  phoneDetail: phoneDetailReducer,
});
