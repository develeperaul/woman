<template>
  <div class="card tw-shadow-base">
    <div class="tw-mb-5">
      <div class="title tw-mb-3.5">Быстрая запись</div>
      <div class="tw-grid tw-gap-4">
        <div class="tw-flex tw-gap-2.5 tw-items-center">
          <div
            class="tw-w-[54px] tw-h-[54px] tw-rounded-full tw-bg-second tw-grid tw-place-content-center"
          >
            <base-icon
              name="scissors-comb"
              class="tw-w-6 tw-h-6 tw-text-title2"
            />
          </div>
          <div class="tw-grid tw-gap-1.5">
            <div class="tw-text-t1">Стрижка женская</div>
            <div class="tw-flex tw-gap-4 tw-text-gray2">
              <div>1 000 ₽</div>
              <div>1 ч</div>
            </div>
          </div>
        </div>

        <div class="tw-flex tw-gap-2.5 tw-items-center">
          <q-avatar size="54px">
            <img src="/test.jpeg" alt="" />
          </q-avatar>

          <div class="tw-grid tw-gap-1.5">
            <div class="tw-text-t1">Ксения Попова</div>
            <div class="tw-flex tw-gap-4 tw-text-gray2">
              <div>Мастер</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="title tw-mb-2.5">Ближайшие даты</div>
      <div class="tw-grid tw-gap-4 tw-mb-6">
        <div class="tw-flex tw-gap-2.5 tw-overflow-auto scroll-none -tw-mx-4">
          <button
            v-for="(n, index) in 10"
            class="tw-py-1.5 tw-px-2 tw-rounded-lg tw-bg-whitedarken tw-grid tw-gap-0.5"
            :class="index === 0 ? 'tw-ml-4' : ''"
          >
            <span> 15.12 </span>
            <span class="tw-text-gray2"> вс </span>
          </button>
        </div>
        <div class="tw-flex tw-gap-2.5 tw-overflow-auto scroll-none -tw-mx-4">
          <button
            v-for="(n, index) in 10"
            class="tw-py-3 tw-px-4.5 tw-rounded-10 tw-border tw-border-gray3"
            :class="index === 0 ? 'tw-ml-4' : ''"
          >
            <span class="tw-text-gray2"> 12:00 </span>
          </button>
        </div>
      </div>
      <base-button theme="gradient"> Записаться </base-button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
