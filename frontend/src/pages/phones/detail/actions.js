import { trackPromise } from 'react-promise-tracker';
import { phoneAPI } from '../../../rest-api/api/phone';
import { actionIds } from './actionIds';

export const fetchPhoneById = id => dispatch =>
  trackPromise(
    phoneAPI
      .fetchPhoneById(id)
      .then(phone => {
        dispatch(updatePhone(phone));
      })
      .catch(error => {
        console.error(error);
      })
  );

const updatePhone = phone => ({
  type: actionIds.FETCH_PHONE_SUCCESS,
  payload: phone,
});
