import { defineStore } from 'pinia';
import { bonuses, bonusRules, bonusHistory } from 'src/api/bonus';
import { DataVal } from 'src/models';
import { BonusT, BonusRuleT, BonusHistoryItemT } from 'src/models/api/bonus';

export default defineStore('bonus', () => {
  const userBonus = ref<DataVal<BonusT | null>>({ loading: false, data: null });

  const getBonus = async () => {
    try {
      userBonus.value.loading = true;
      const res = (await bonuses()).data;
      userBonus.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      userBonus.value.loading = false;
    }
  };
  const bonusRule = ref<DataVal<BonusRuleT | null>>({
    loading: false,
    data: null,
  });
  const getBonuseRules = async () => {
    try {
      bonusRule.value.loading = true;
      const res = (await bonusRules()).data;
      bonusRule.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      bonusRule.value.loading = false;
    }
  };
  const userBonusHistoryAll = ref<DataVal<BonusHistoryItemT[]>>({
    loading: false,
    data: [],
  });
  const userBonusHistoryWireOff = ref<DataVal<BonusHistoryItemT[]>>({
    loading: false,
    data: [],
  });
  const userBonusHistoryAccrual = ref<DataVal<BonusHistoryItemT[]>>({
    loading: false,
    data: [],
  });

  const getBonuseHistory = async (type: 'accrual' | 'write_off' | 'all') => {
    if (type === 'all') {
      try {
        userBonusHistoryAll.value.loading = true;
        const res = (await bonusHistory(type)).data;
        userBonusHistoryAll.value.data = res;
        return res;
      } catch (e) {
        throw e;
      } finally {
        userBonusHistoryAll.value.loading = false;
      }
    }
    if (type === 'accrual') {
      try {
        userBonusHistoryAccrual.value.loading = true;
        const res = (await bonusHistory(type)).data;
        userBonusHistoryAccrual.value.data = res;
        return res;
      } catch (e) {
        throw e;
      } finally {
        userBonusHistoryAccrual.value.loading = false;
      }
    }
    if (type === 'write_off') {
      try {
        userBonusHistoryWireOff.value.loading = true;
        const res = (await bonusHistory(type)).data;
        userBonusHistoryWireOff.value.data = res;
        return res;
      } catch (e) {
        throw e;
      } finally {
        userBonusHistoryWireOff.value.loading = false;
      }
    }
  };
  return {
    userBonus,
    getBonus,
    bonusRule,
    getBonuseRules,
    userBonusHistoryAll,
    userBonusHistoryWireOff,
    userBonusHistoryAccrual,
    getBonuseHistory,
  };
});
