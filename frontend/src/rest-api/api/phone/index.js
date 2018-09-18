import * as mock from './mock';
import * as api from './api';
import { useMockAPI } from '../../config';

export const phoneAPI = useMockAPI ? mock : api;
