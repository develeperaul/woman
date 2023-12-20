<template>
  <q-page class="tw-container">
    <div class="tw-grid tw-gap-3">
      <div
        v-for="n in 10"
        class="tw-bg-white tw-rounded-2xl tw-overflow-hidden"
        @click="$router.push({ name: 'action', params: { id: n } })"
      >
        <img
          src="/test.jpeg"
          class="tw-h-[147px] tw-w-full tw-object-cover"
          alt=""
        />
        <div class="tw-grid tw-gap-1.5 tw-pt-2.5 tw-pb-4 tw-px-4">
          <div class="tw-text-t1 tw-font-semibold">Тестовая акция {{ n }}</div>
          <div class="tw-text-gray2 tw-text-t2">Краткое описание</div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
