import { createEmptyPhone } from './viewModel';

export const mapPhonesModelToViewModel = phones =>
  Array.isArray(phones) ? phones.map(mapPhoneModelToViewModel) : [];

const mapPhoneModelToViewModel = phone =>
  Boolean(phone)
    ? {
        id: phone.id,
        title: phone.title,
        imageUrl: phone.imageUrl,
        price: phone.price && `${phone.price} €`,
      }
    : createEmptyPhone();
