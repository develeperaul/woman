<template>
  <q-page class="tw-container">
    <div class="card tw-mb-5">
      <div class="tw-text-t1 tw-font-semibold tw-mb-2.5">Лечебная стрижка</div>
      <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-1.5">
        <div class="tw-text-gray2">Мастер</div>
        <div>Ксения Попова</div>
      </div>
      <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-2.5">
        <div class="tw-text-gray2">Адрес</div>
        <div>Проспект Октября, 2</div>
      </div>
      <div class="tw-text-t1 tw-flex tw-gap-5">
        <div>1 200 ₽</div>
        <div class="tw-text-[#8E8C8C]">1 ч</div>
      </div>
    </div>

    <AppCalendar />

    <base-button theme="gradient"> Записаться </base-button>
    <teleport to="body">
      <div v-if="false" class="modal">
        <img
          src="~/assets/img/succes.png"
          class="tw-w-[197px] tw-h-[147px] tw-mb-6"
          alt=""
        />
        <div class="title tw-mb-6">Вы успешно записаны!</div>
        <div class="card tw-w-full tw-mb-7.5">
          <div class="tw-font-semibold tw-text-t1 tw-mb-1.5">
            Лечебная стрижка
          </div>

          <div class="tw-flex tw-items-center tw-gap-2.5 tw-mb-5">
            <base-icon name="calendar" class="tw-w-6 tw-h-6 tw-text-primary" />
            <div>14 октября (вт) 10:00</div>
          </div>
          <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-1.5">
            <div class="tw-text-gray2">Мастер</div>
            <div>Ксения Попова</div>
          </div>
          <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5">
            <div class="tw-text-gray2">Адрес</div>
            <div>Проспект Октября, 2</div>
          </div>
        </div>
        <base-button theme="gradient" class="tw-w-full"> Готово </base-button>
      </div>
    </teleport>
  </q-page>
</template>
<script setup lang="ts">
import AppCalendar from 'src/components/AppCalendar.vue';
</script>
<style lang="scss" scoped>
.modal {
  @apply tw-fixed tw-top-0 tw-w-full tw-h-full tw-bg-whitedarken tw-grid tw-content-center tw-justify-items-center tw-px-12;
  z-index: 10000;
}
</style>
