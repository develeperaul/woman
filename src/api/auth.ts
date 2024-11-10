import { DataObj } from 'src/models/api';
import { api, apiAuth } from './index';

export const auth = (
  phone: string,

): Promise<
  DataObj<'ok'>
> => {
  const body = new FormData();
  body.append('phone', phone);

  return apiAuth.mainKy.post('auth/call', { body }).json();
};
export const checkStatus = (
  phone: string,

): Promise<
  DataObj<{
    token: string | null;
  }>
> => {
  const body = new FormData();
  body.append('phone', phone);

  return apiAuth.mainKy.post('auth/check-status', { body }).json();
};
