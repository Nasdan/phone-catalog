const phones = [
  {
    id: 1,
    title: 'iPhone 7',
  },
  {
    id: 2,
    title: 'Samsung Galaxy S7',
  },
];

exports.getPhones = () =>
  Promise.resolve(
    phones.map(phone => ({
      id: phone.id,
      title: phone.title,
    }))
  );

exports.getPhoneById = id =>
  Promise.resolve(phones.find(phone => phone.id === Number(id)));
