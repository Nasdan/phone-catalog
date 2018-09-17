const phones = '/phones';

export const routes = {
  default: '/',
  phones: {
    default: phones,
    list: phones,
    detail: `${phones}/:id`,
  },
};
