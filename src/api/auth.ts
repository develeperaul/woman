import { api } from './index';

export const auth = (phone: string) => {
  const body = new FormData();
  body.append('phone', phone);
  return api.mainKy.post('auth', { body }).json();
};
