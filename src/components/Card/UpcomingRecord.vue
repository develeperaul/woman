<template>
  <div class="card">
    <div class="title tw-mb-2">Предстоящая запись</div>
    <div class="subtitle tw-mb-1.5">Стрижка женская</div>
    <div class="tw-flex tw-gap-2.5 tw-items-center tw-mb-3.5">
      <base-icon
        name="calendar"
        class="tw-w-[22px] tw-h-[22px] tw-text-primary"
      />
      14 октября (вт) 10:00
    </div>
    <div class="tw-flex tw-gap-2.5 tw-text-gray tw-text-t2 tw-mb-1.5">
      <div>Мастер</div>
      <div>Ксения Попова</div>
    </div>
    <div class="tw-flex tw-gap-2.5 tw-text-gray tw-text-t2">
      <div>Адрес</div>
      <div>Проспект Октября, 105</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
