import { createEmptyPhone } from './viewModel';

export const mapPhoneModelToViewModel = phone =>
  Boolean(phone)
    ? {
        id: phone.id,
        title: phone.title,
        imageUrl: phone.imageUrl,
        description: phone.description,
        color: phone.color,
        price: phone.price && `${phone.price} €`,
      }
    : createEmptyPhone();
