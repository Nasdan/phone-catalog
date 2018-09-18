export const mapPhoneModelToViewModel = phone => ({
  ...phone,
  price: `${phone.price} €`,
});
