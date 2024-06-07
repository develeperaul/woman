<template>
  <!-- <router-link :to="to" class="tw-block"> -->
  <div class="card">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-3">
      <div class="title">{{ title }}</div>
      <!-- <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" /> -->
    </div>
    <div class="tw-flex tw-overflow-auto tw-gap-3 scroll-none -tw-mx-4">
      <img
        v-for="(item, index) in imgs"
        :src="item.url"
        alt=""
        class="tw-w-[120px] tw-h-[120px] tw-rounded-xl tw-object-cover tw-shrink-0"
        :class="index === 0 ? 'tw-ml-4' : ''"
      />
    </div>
  </div>
  <!-- </router-link> -->
</template>
<script setup lang="ts">
const props = defineProps<{
  to: string | { name: string };
  title: string;
  imgs: {
    id: number;
    path: string;
    width: string;
    height: string;
    url: string;
  }[];
}>();
</script>
<style lang="scss" scoped></style>
