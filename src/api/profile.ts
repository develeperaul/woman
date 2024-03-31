import { DataObj } from 'src/models/api';
import { api } from './index';
import { UserT } from 'src/models/api/profile';
// Данные пользователя
export const user = (): Promise<DataObj<UserT>> =>
  api.mainKy('customer').json();

// Обновление данных пользователя
export const edit = (obj: {
  name: string;
  sex: 'male' | 'female' | 'pidor' | 'unknown';
  email?: string | null;
  birthday?: string | null;
}) => {
  const body = new FormData();
  for (let key in obj) {
    if (obj[key] !== null) body.append(`${key}`, obj[key] as string);
  }
  return api.mainKy.put('customer', { body }).json();
};

// Удалить пользователя
export const del = (): Promise<DataObj<any>> =>
  api.mainKy.delete('customer').json();

// Сброс токена, выход из системы
export const exit = (): Promise<DataObj<any>> =>
  api.mainKy.put('customer/exit').json();
