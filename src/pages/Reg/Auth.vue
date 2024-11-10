<template>
  <q-page class="tw-container tw-grid env-t env-b">
    <Form @submit="submit" class="tw-grid tw-content-between">
      <div class="">
        <div class="tw-text-h1 tw-font-bold tw-mb-10">Авторизация</div>
        <div>
          <base-input
            name="phone"
            type="tel"
            v-model="phone"
            maska="+7 (###)-###-##-##"
            label="Номер телефона "
            placeholder="+7 (000)-000-00-00"
            class="tw-mb-5"
            unMask
          />
        </div>
      </div>

      <base-button type="submit" theme="gradient"> Войти </base-button>
    </Form>
  </q-page>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { auth } from 'src/api/auth';
const { phone } = storeToRefs(authStore());
const router = useRouter();
const submit = async () => {
  window.localStorage.setItem('phone', JSON.stringify(phone.value));
  router.push({ name: 'verify' });
  try {

    await auth(`+7${phone.value}`)
  } catch (e) {
    console.log(e);

  }
  // await authStore().login(0);
};
</script>
<style lang="scss" scoped></style>
