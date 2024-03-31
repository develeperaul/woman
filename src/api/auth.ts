import { DataObj } from 'src/models/api';
import { api } from './index';

export const auth = (
  phone: string
): Promise<
  DataObj<{
    phone: string;
    status: 'agreed' | 'rejected' | 'consider' | 'ok';
  }>
> => {
  const body = new FormData();
  body.append('phone', phone);
  return api.mainKy.post('auth', { body }).json();
};

export const checkStatus = (
  phone: string
): Promise<{ token: string | null }> => {
  const body = new FormData();
  body.append('phone', phone);
  return api.mainKy.post('check-status', { body }).json();
};
