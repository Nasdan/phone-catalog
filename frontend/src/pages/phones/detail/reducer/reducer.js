import { actionIds } from '../actionIds';
import { createEmptyPhone } from './model';

export const phoneDetailReducer = (state = createEmptyPhone(), action) => {
  switch (action.type) {
    case actionIds.FETCH_PHONE_SUCCESS:
      return handleFetchPhoneSuccess(state, action.payload);
  }
  return state;
};

const handleFetchPhoneSuccess = (state, phone) => ({ ...phone });
