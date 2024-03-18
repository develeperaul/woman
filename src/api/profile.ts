import { DataObj } from 'src/models/api';
import { api } from './index';

// Обновление данных пользователя
export const customer = (): Promise<DataObj<any>> =>
  api.mainKy.put('customer').json();

// Удалить пользователя
export const del = (): Promise<DataObj<any>> =>
  api.mainKy.delete('customer').json();

// Сброс токена, выход из системы
export const exit = (): Promise<DataObj<any>> =>
  api.mainKy.put('customer/exit').json();
