import { createSelector } from 'reselect';
import { phoneDetailSelector } from '../../../selectors';
import { mapPhoneModelToViewModel } from './mappers';

export const phoneDetailVMSelector = createSelector(
  phoneDetailSelector,
  phoneDetail => mapPhoneModelToViewModel(phoneDetail)
);
