import { phones, phone } from './mockData';

export const fetchPhones = () => Promise.resolve(phones);

export const fetchPhoneById = id => Promise.resolve(phone);
