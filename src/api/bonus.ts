import { DataObj } from 'src/models/api';
import { api } from './index';
import { BonusHistoryItemT, BonusRuleT, BonusT } from 'src/models/api/bonus';

// Показывает номер карты пользователя, кол-во бонусов на карте
export const bonuses = (): Promise<DataObj<BonusT>> =>
  api.mainKy('my-bonuses').json();

// Показывает правила использования бонусной карты
export const bonusRules = (): Promise<DataObj<BonusRuleT>> =>
  api.mainKy('bonus-card-rule').json();

// История зачисления бонусов
export const bonusHistory = (
  type: 'accrual' | 'write_off' | 'all'
): Promise<DataObj<BonusHistoryItemT[]>> =>
  api.mainKy(`bonus-card-history?type=${type}`).json();
