<template>
  <q-page>
    <div class="tw-container">
      <q-btn flat round class="-tw-ml-4 tw-mb-4" @click="$router.go(-1)">
        <base-icon name="back" class="tw-w-8 tw-h-8" />
      </q-btn>
      <div class="img tw-mb-5">
        <img src="/test.jpeg" />
      </div>
    </div>
    <div class="tw-bg-white tw-rounded-2xl tw-px-5.5 tw-pt-4 tw-pb-7.5">
      <div class="tw-text-h2 tw-font-semibold tw-mb-1.5">Стрижка в подарок</div>
      <div class="tw-text-t1 tw-mb-3.5">Дарим каждую 6-ю стрижку</div>
      <div class="tw-text-t2 tw-mb-5">
        Для этого нужно записаться на стрижку через приложение и мы
        автоматически засчитаем стрижку и 6-я стрижка будет бесплатной.
      </div>
      <div class="tw-text-gray2 tw-mb-5">
        Акция действует с 20 ноября по 20 декабря 2023 г.
      </div>
      <base-button
        theme="gradient"
        @click="$router.push({ name: 'to-record' })"
      >
        Записаться
      </base-button>
    </div>
  </q-page>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.img {
  @apply tw-rounded-2xl tw-w-full tw-h-[210px] tw-relative tw-overflow-hidden;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  & > img {
    @apply tw-absolute tw-top-1/2 tw-left-0 tw-transform -tw-translate-y-1/2;
  }
}
</style>
