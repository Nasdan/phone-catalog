import { combineReducers } from 'redux';
import { phoneListReducer } from './pages/phones/list';

export const rootReducer = combineReducers({
  phoneList: phoneListReducer,
});
