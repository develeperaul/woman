import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { actions, action } from 'src/api/action';
import { DataVal } from 'src/models';
import { ActionItemT } from 'src/models/api/action';

export default defineStore('actions', () => {
  const { salonLocal } = storeToRefs(mainStore());
  const actionList = ref<DataVal<ActionItemT[]>>({ loading: false, data: [] });

  const getActions = async () => {
    try {
      actionList.value.loading = true;

      const res = (await actions()).data;
      actionList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      actionList.value.loading = false;
    }
  };

  const getAction = async (id: number) => {
    try {
      const res = (await action(id)).data;
      return res;
    } catch (e) {
      throw e;
    }
  };

  return {
    actionList,
    getActions,
    getAction,
  };
});
