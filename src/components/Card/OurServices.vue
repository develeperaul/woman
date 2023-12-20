<template>
  <div>
    <div class="title tw-mb-2.5">Наши услуги</div>
    <div class="tw-flex tw-gap-4 tw-overflow-auto scroll-none -tw-mx-5.5">
      <div
        v-for="(n, index) in servises"
        class="tw-grid tw-gap-1.5"
        :class="[
          index === 0 ? 'tw-ml-5.5' : '',
          index === 9 ? 'tw-mr-5.5' : '',
        ]"
      >
        <q-img
          :src="n.url"
          alt=""
          class="tw-w-[120px] tw-h-[120px] tw-rounded-xl"
        />
        <div class="tw-text-t1">{{ n.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Servise } from 'src/models';
const props = defineProps<{
  servises: Servise[];
}>();
</script>
<style lang="scss" scoped></style>
