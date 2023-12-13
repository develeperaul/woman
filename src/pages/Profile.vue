<template>
  <q-page class="tw-container tw-grid tw-content-betweens">
    <div>
      <q-btn flat round class="-tw-ml-4 tw-mb-4">
        <base-icon name="back" class="tw-w-8 tw-h-8" />
      </q-btn>
      <div class="tw-text-h2 tw-font-semibold tw-mb-7.5">Екатерина</div>
      <Form @submit="submit">
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
        <div class="tw-text-gray2 tw-text-t2 tw-mt-2">
          Укажите пол и получите 50 бонусов
        </div>
      </Form>
    </div>
    <div class="tw-self-end tw-mb-20">
      <div class="tw-text-link tw-text-t2 tw-mb-4">Выйти из аккаунта</div>
      <div class="tw-text-error tw-text-t2">Удалить аккаунт</div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
const now = dayjs().valueOf();

const date = ref('');
const submit = (val) => {
  console.log(val);
};
</script>
<style lang="scss" scoped></style>
