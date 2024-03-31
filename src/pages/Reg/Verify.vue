<template>
  <q-page class="tw-container env-b tw-content-center">
    <div class="tw-grid tw-content-between">
      <template v-if="count < 10">
        <div class="tw-mb-[70px]">
          <div class="tw-text-h1 tw-text-center tw-font-bold tw-mb-10">
            <span class=""> Просим вас позвонить на номер </span>
            <br />
            <br />
            <a @click="call" href="tel:+78005558607" class="tw-text-primary2">
              8 (800) 555-86-07
            </a>
          </div>
          <div class="tw-text-h2 tw-font-bold tw-text-center tw-mb-4">
            После успешного звонка, вы будете авторизованы
          </div>
        </div>

        <base-button class="tw-mb-5" @click="back" theme="gradient">
          Назад
        </base-button>
      </template>
      <template v-else>
        <div class="tw-grid tw-place-content-center tw-gap-4">
          <div class="tw-text-h2 tw-font-bold tw-text-center">
            Что то пошло не так…
          </div>
          <base-button class="" @click="rezet" theme="gradient">
            Повторить
          </base-button>
        </div>
      </template>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const timer = ref();
const count = ref(0); //max 10
const back = () => {
  clearInterval(timer.value);
  router.go(-1);
};
const rezet = () => {
  count.value = 0;
  call();
};
const call = () => {
  if (count.value === 10) clearInterval(timer.value);
  timer.value = setInterval(async () => {
    try {
      count.value++;
      const res = await authStore().check();
      if (res.token !== null) {
        clearInterval(timer.value);
        await mainStore().getSalons();
        router.push({ name: 'home' });
      }
    } catch (e) {
      throw e;
    }
  }, 5000);
};
const submit = () => {
  router.push({ name: 'data' });
};
</script>
<style lang="scss" scoped></style>
