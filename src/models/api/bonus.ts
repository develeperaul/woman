export type BonusT = {
  id: number;
  number_card: string;
  bonus: string;
};

export type BonusRuleT = {
  accrual: string;
  bonus: string;
  write_off: string;
};

export type BonusHistoryItemT = {
  id: number;
  type: string;
  service: string;
  price: string;
  created_at: string;
};
