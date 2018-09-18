import { get } from '../../config/createRequest';
import { urls } from './urls';

export const fetchPhones = () => get(urls.fetchPhones());

export const fetchPhoneById = id => get(urls.fetchPhoneById(id));
