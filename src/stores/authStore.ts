import { defineStore } from 'pinia';
import { checkStatus } from 'src/api/auth';
import { setTokensData } from 'src/api/tokens';
export default defineStore('auth', () => {
  const phone = ref<String>('');
  const login = async () => {
    const localPhone = window.localStorage.getItem('phone');


    try {
      let res = null;
      if (phone.value) res = (await checkStatus(`+7${phone.value}`)).data;
      else if (localPhone)
        res = (await checkStatus(`+7${JSON.parse(localPhone)}`)).data;

      if (res && res.token) setTokensData(res.token, Date.now());
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
