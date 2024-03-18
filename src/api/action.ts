import { DataObj } from 'src/models/api';
import { api } from './index';
import { ActionItemT } from 'src/models/api/action';

// Показывает список акций
export const actions = (): Promise<DataObj<ActionItemT[]>> =>
  api.mainKy('shares').json();

// Показывает карточку акций
export const action = (share_id: number): Promise<DataObj<ActionItemT>> =>
  api.mainKy(`shares/${share_id}`).json();
