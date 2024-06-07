<template>
  <!-- <router-link :to="to"> -->
  <div class="card">
    <div class="tw-text-t1 tw-font-semibold tw-mb-1.5">{{ name }}</div>
    <div class="tw-flex tw-gap-2 tw-items-center tw-mb-3.5">
      <base-icon
        name="calendar"
        class="tw-w-5.5 tw-h-5.5"
        :class="[past ? 'tw-text-icons' : 'tw-text-gray2']"
      />
      <div class=" ">{{ date }}</div>
    </div>
    <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-2.5">
      <div class="tw-text-gray2">Мастер</div>
      <div>{{ master }}</div>
    </div>
    <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-4">
      <div class="tw-text-gray2">Адрес</div>
      <div>{{ address }}</div>
    </div>
    <button v-if="prev" class="tw-text-link" @click="$emit('cancel')">
      Отменить запись
    </button>
  </div>
  <!-- </router-link> -->
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    // to: string | { name: string } | { name: string; params: { id: number } };
    name: string;
    date: string;
    master: string;
    address: string;
    past?: boolean;
    prev?: boolean;
  }>(),
  {
    past: false,
    prev: false,
  }
);
const emit = defineEmits<{
  (e: 'cancel'): void;
}>();
</script>
<style lang="scss" scoped></style>
