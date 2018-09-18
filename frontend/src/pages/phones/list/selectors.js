import { createSelector } from 'reselect';
import { phoneListSelector } from '../../../selectors';
import { mapPhonesModelToViewModel } from './mappers';

export const phoneListVMSelector = createSelector(phoneListSelector, phones =>
  mapPhonesModelToViewModel(phones)
);
