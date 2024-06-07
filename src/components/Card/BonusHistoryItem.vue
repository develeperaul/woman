<template>
  <div class="card tw-flex tw-gap-2 tw-justify-between tw-items-center">
    <div class="tw-grid tw-gap-1.5">
      <div class="tw-text-t1 tw-font-semibold">{{ title }}</div>
      <div class="tw-grid tw-grid-cols-[70px_1fr]">
        <div class="tw-text-t2">{{ summ }} ₽</div>
        <div class="tw-text-t2 tw-text-[#8E8C8C]">{{ date }}</div>
      </div>
    </div>
    <div
      class="tw-bg-second tw-flex tw-gap-2.5 tw-items-center tw-rounded-10 tw-py-3 tw-px-2.5"
    >
      <div class="tw-text-t1">+{{ bonus }}</div>
      <base-icon name="briliant" class="tw-w-4.5 tw-h-4.5 tw-text-btns" />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  summ: string;
  date: string;
  bonus: string;
}>();
</script>
<style lang="scss" scoped></style>
