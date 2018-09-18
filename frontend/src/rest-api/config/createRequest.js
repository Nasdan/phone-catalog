import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
});

export const get = url => instance.get(url).then(response => response.data);
