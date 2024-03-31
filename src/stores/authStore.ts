import { defineStore } from 'pinia';
import { auth, checkStatus } from 'src/api/auth';
import { setTokensData } from 'src/api/tokens';
export default defineStore('auth', () => {
  const phone = ref<String>('');
  const login = async () => {
    try {
      return (await auth(`+7${phone.value}`)).data;
    } catch (e) {
      throw e;
    }
  };

  const check = async () => {
    try {
      const res = await checkStatus(`+7${phone.value}`);

      if (res.token) setTokensData(res.token, Date.now());
      return res;
    } catch (e) {
      throw e;
    }
  };

  return {
    phone,
    login,
    check,
  };
});
