<template>
  <button class="tab">
    <slot />
  </button>
</template>
<script lang="ts">
export default defineComponent({
  name: 'tab-item',
});
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.tab {
  @apply tw-bg-white tw-rounded-lg tw-text-t2 tw-text-gray2 tw-py-2.5 tw-px-4;
  border: 1px solid #e2e2e2;
  transition: all 0.3s ease-in-out;
  &.active {
    @apply tw-bg-filter tw-border-filter tw-text-white;
  }
}
</style>
