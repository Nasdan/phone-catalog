import { trackPromise } from 'react-promise-tracker';
import { phoneAPI } from '../../../rest-api/api/phone';
import { actionIds } from './actionIds';

export const fetchPhones = () => dispatch =>
  trackPromise(
    phoneAPI
      .fetchPhones()
      .then(phones => {
        dispatch(updatePhones(phones));
      })
      .catch(error => {
        console.error(error);
      })
  );

const updatePhones = phones => ({
  type: actionIds.FETCH_PHONES_SUCCESS,
  payload: phones,
});
