const baseUrl = '/phones';

export const urls = {
  fetchPhones: () => baseUrl,
  fetchPhoneById: id => `${baseUrl}/${id}`,
};
