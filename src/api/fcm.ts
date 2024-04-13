import { DataObj } from 'src/models/api';
import { api } from './index';

export const FCMTokenSend = (obj: { token: string }) => {
  api.mainKy.post('fire-base/token', { json: obj }).json();
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
