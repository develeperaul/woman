import { defineStore } from 'pinia';
import { user, edit, del, exit } from 'src/api/profile';
import { DataVal } from 'src/models';
import { UserT } from 'src/models/api/profile';

export default defineStore('profile', () => {
  const profile = ref<DataVal<UserT | null>>({ loading: false, data: null });

  const getProfile = async () => {
    try {
      profile.value.loading = true;

      const res = (await user()).data;
      profile.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      profile.value.loading = false;
    }
  };

  const editUser = async () => {
    try {
      return await edit({ sex: 'unknown', name: 'test' });
    } catch (e) {
      throw e;
    }
  };

  const delUser = async () => {
    try {
      return await del();
    } catch (e) {
      throw e;
    }
  };

  const exitUser = async () => {
    try {
      return await exit();
    } catch (e) {
      throw e;
    }
  };

  return {
    profile,
    getProfile,
    editUser,
    delUser,
    exitUser,
  };
});
