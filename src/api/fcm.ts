import { DataObj } from 'src/models/api';
import { api } from './index';

export const FCMTokenSend = (token: string) => {
  const body = new FormData();
  body.append('toke', token);
  api.mainKy.post('fire-base/token', { body }).json();
};

export const FCMTokenEdit = (token: string) => {
  const body = new FormData();
  body.append('toke', token);
  return api.mainKy.put('fire-base/token', { body }).json();
};

export const FCMTokenSettings = (): Promise<
  DataObj<{
    personal_offer: boolean;
    promotions: boolean;
    upcoming_entry: boolean;
  }>
> => {
  return api.mainKy('fire-base/settings').json();
};

export const FCMTokenHistory = (): Promise<
  DataObj<
    {
      id: number;
      title: string;
      body: string;
      type: string;
      created_at: string;
    }[]
  >
> => {
  return api.mainKy('fire-base/history').json();
};
