<template>
  <q-page class="tw-container tw-grid">
    <Form @submit="submit" class="tw-grid tw-content-between">
      <div>
        <div class="tw-text-h1 tw-mb-4 tw-font-bold">Данные</div>
        <div class="tw-text-t1 tw-text-gray2 tw-mb-5">
          Заполните все поля, так мы сможем начислять вам больше бонусов
        </div>

        <base-input
          name="name"
          v-model="name"
          label="Имя*"
          placeholder="Ваше имя"
          class="tw-mb-5"
        />

        <base-input
          name="date"
          v-model="date"
          maska="##-##-####"
          :rules="`dateformat:${now}`"
          label="Дата рождения"
          placeholder="ДД-ММ-ГГГГ"
          class="tw-mb-5"
        />

        <div>
          <div class="tw-text-t1 tw-font-medium tw-mb-1.5">Пол</div>
          <div class="tw-flex tw-gap-2.5">
            <button
              class="tw-rounded-10 tw-text-t1 tw-text-gray2 tw-w-[50px] tw-h-[50px] tw-bg-white"
            >
              М
            </button>
            <button
              class="tw-rounded-10 tw-text-t1 tw-text-gray2 tw-w-[50px] tw-h-[50px] tw-bg-white"
            >
              Ж
            </button>
          </div>
        </div>

        <div class="tw-text-t2 tw-text-gray2 tw-mt-10">*обязательные поля</div>
      </div>

      <base-button class="tw-mb-5" type="submit" theme="gradient">
        Войти
      </base-button>
    </Form>
  </q-page>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
const now = dayjs().valueOf();
const name = ref('');
const date = ref('');
const submit = (val) => {
  console.log(val);
};
</script>
<style lang="scss" scoped></style>
