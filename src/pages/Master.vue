<template>
  <q-page>
    <div class="tw-container">
      <div class="-tw-ml-2 tw-mb-1.5">
        <q-btn flat round>
          <base-icon name="back" class="tw-w-10 tw-h-10 tw-text-white" />
        </q-btn>
      </div>
      <div class="tw-flex tw-gap-2.5 tw-items-center tw-mb-8">
        <q-avatar size="90px">
          <img src="/test.jpeg" alt="" />
        </q-avatar>
        <div>
          <div class="tw-text-h2 tw-mb-1.5 tw-font-semibold">
            Ольга Кононова
          </div>
          <div class="tw-text-gray2 tw-text-t1">Парикмахер-универсал</div>
        </div>
      </div>
    </div>
    <div class="card tw-mb-3">
      <div class="tw-text-t1 tw-mb-4">
        Ольга специализируется на стрижках длинных волос и сложном окрашивании.
        В салоне работает с 2015 года.
      </div>
      <div class="tw-text-t1 tw-font-semibold">
        Техники сложного окрашивания
      </div>
      <div class="tw-grid tw-gap-0.5">
        <div v-for="n in 4" class="tw-flex tw-gap-2 tw-items-center">
          <div class="tw-rounded-full tw-w-1.5 tw-h-1.5 tw-bg-title"></div>
          <div>аэртач</div>
        </div>
      </div>
    </div>

    <Works
      :to="{ name: 'our-works' }"
      title="Работы"
      :imgs="imgs"
      class="tw-mb-5.5"
    />
    <div class="tw-container">
      <base-button theme="gradient"> Записаться </base-button>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import Works from 'src/components/Card/Works.vue';

const imgs = [
  '/test.jpeg',
  '/test.jpeg',
  '/test.jpeg',
  '/test.jpeg',
  '/test.jpeg',
  '/test.jpeg',
];
</script>
<style lang="scss" scoped></style>
