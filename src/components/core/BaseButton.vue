<template>
  <button class="btn" :class="[`btn_${theme}`]"><slot /></button>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    theme?: 'bg' | 'gradient' | 'border';
  }>(),
  {
    theme: 'bg',
  }
);
</script>
<style lang="scss" scoped>
.btn {
  @apply tw-px-2.5 tw-py-4 tw-font-semibold tw-text-btn_text tw-rounded-2xl tw-w-full;
  &_bg {
    @apply tw-bg-btn_modal active:tw-bg-btn_modal/50;
  }
  &_gradient {
    background: linear-gradient(
      180deg,
      theme('colors.btns') 0%,
      theme('colors.btnsto') 100%
    );
    &:active {
      background: linear-gradient(
        180deg,
        theme('colors.btns') 0%,
        theme('colors.gray') 100%
      );
    }
  }
  &_border {
    @apply tw-bg-transparent tw-text-title tw-border tw-border-btn_modal active:tw-border-btn_modal/50;
  }
}
</style>
