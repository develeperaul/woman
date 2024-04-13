import { defineStore } from 'pinia';
import { auth } from 'src/api/auth';
import { setTokensData } from 'src/api/tokens';
export default defineStore('auth', () => {
  const phone = ref<String>('');
  const login = async () => {
    try {
      const res = (await auth(`+7${phone.value}`)).data;
      if (res.token) setTokensData(res.token, Date.now());
      return res;
    } catch (e) {
      throw e;
    }
  };

  return {
    phone,
    login,
  };
});
