export const mapPhonesModelToViewModel = phones =>
  phones.map(mapPhoneModelToViewModel);

const mapPhoneModelToViewModel = phone => ({
  ...phone,
  price: `${phone.price} €`,
});
