import { phoneAPI } from '../../../rest-api/api/phone';
import { actionIds } from './actionIds';

export const fetchPhones = () => dispatch =>
  phoneAPI.fetchPhones().then(phones => {
    dispatch(updatePhones(phones));
  });

const updatePhones = phones => ({
  type: actionIds.FETCH_PHONES_SUCCESS,
  payload: phones,
});
