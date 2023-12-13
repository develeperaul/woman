<template>
  <q-page class="env-b tw-grid tw-content-between">
    <div class="tw-container">
      <router-link
        :to="{ name: 'masters' }"
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
    </div>
    <router-link :to="{ name: 'our-works' }" class="card">
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-3">
        <div class="title">Наши работы</div>
        <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
      </div>
      <div class="tw-flex tw-overflow-auto tw-gap-3 scroll-none -tw-mx-4">
        <img
          v-for="(n, index) in 10"
          src="/test.jpeg"
          alt=""
          class="tw-w-[120px] tw-h-[120px] tw-rounded-xl"
          :class="index === 0 ? 'tw-ml-4' : ''"
        />
      </div>
    </router-link>
  </q-page>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
