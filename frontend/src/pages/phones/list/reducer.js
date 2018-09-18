import { actionIds } from './actionIds';

export const phoneListReducer = (state = [], action) => {
  switch (action.type) {
    case actionIds.FETCH_PHONES_SUCCESS:
      return handleFetchPhonesSuccess(state, action.payload);
  }
  return state;
};

const handleFetchPhonesSuccess = (state, phones) => [...phones];
