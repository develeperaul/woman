<template>
  <q-page class="tw-container">
    <Form @submit="submit" class="tw-grid tw-content-between">
      <div class="tw-mb-[70px]">
        <div class="tw-text-h1 tw-font-bold tw-mb-10">Код подтверждения</div>
        <div class="tw-text-t1 tw-mb-2.5">На ваш телефон поступит звонок.</div>
        <div class="tw-text-t1 tw-text-gray2 tw-mb-10">
          Введите последние 4 цифры входящего номера. Отвечать на звонок не
          нужно.
        </div>
        <CodeInput name="kod" class="tw-justify-center" />
      </div>

      <base-button class="tw-mb-5" type="submit" theme="gradient">
        Далее
      </base-button>
      <div class="tw-text-center tw-text-t1 tw-text-primary">
        Позвонить повторно
      </div>
    </Form>
  </q-page>
</template>
<script setup lang="ts">
const submit = () => {};
</script>
<style lang="scss" scoped></style>
