<template>
  <q-page class="tw-container">
    <router-link
      :to="{ name: 'set-date', params: { id: 1 } }"
      class="card tw-flex tw-items-center tw-justify-between"
    >
      <div class="">
        <div class="tw-flex tw-items-center tw-gap-2 tw-mb-1.5">
          <div class="tw-font-medium tw-text-t1">Женская стрижка</div>
          <base-icon name="info" class="tw-w-4 tw-h-4" />
        </div>
        <div class="tw-text-t1 tw-flex tw-gap-5">
          <div>от 1 000 ₽</div>
          <div class="tw-text-[#8E8C8C]">~45 мин</div>
        </div>
      </div>
      <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
    </router-link>
  </q-page>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
