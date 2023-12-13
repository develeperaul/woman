<template>
  <router-link :to="{ name: 'about' }">
    <div class="card tw-shadow-base">
      <div class="tw-flex tw-items-center tw-justify-between">
        <div class="title">О салоне</div>
        <q-btn round flat>
          <base-icon name="forward" class="tw-w-10 tw-h-10 tw-text-[#C7C7C7]" />
        </q-btn>
      </div>
      <div>
        <div class="tw-font-semibold tw-text-t1 tw-mb-2">
          Проспект Октября, 105
        </div>
        <div class="tw-mb-2">+7 999 000 00 00</div>
        <div class="tw-mb-4">с 10:00 до 21:00</div>
        <div class="tw-flex tw-gap-2">
          <a
            href="#"
            class="tw-rounded-full tw-w-[34px] tw-h-[34px] tw-bg-primary tw-grid tw-place-content-center"
          >
            <base-icon name="wp" class="tw-text-white tw-w-4 tw-h-4" />
          </a>

          <a
            href="#"
            class="tw-rounded-full tw-w-[34px] tw-h-[34px] tw-bg-primary tw-grid tw-place-content-center"
          >
            <base-icon name="tg" class="tw-text-white tw-w-4 tw-h-4" />
          </a>

          <a
            href="#"
            class="tw-rounded-full tw-w-[34px] tw-h-[34px] tw-bg-primary tw-grid tw-place-content-center"
          >
            <base-icon name="vk" class="tw-text-white tw-w-4 tw-h-4" />
          </a>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
