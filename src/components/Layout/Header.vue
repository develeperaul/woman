<template>
  <div class="header tw-flex tw-justify-center tw-items-center">
    <div
      class="tw-absolute tw-left-1 tw-top-1/2 tw-transform -tw-translate-y-1/2"
    >
      <q-btn round flat @click="back">
        <base-icon name="back" class="tw-text-white tw-w-10 tw-h-10" />
      </q-btn>
    </div>
    <div class="tw-text-h2 tw-text-white tw-font-semibold">
      {{ $route.meta.title }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const back = () => {
  console.log(route);

  router.go(-1);
};
</script>
<style lang="scss" scoped>
.header {
  height: 67px;
  background: linear-gradient(
    180deg,
    theme('colors.primaryto2') 0%,
    theme('colors.primary2') 100%
  );
}
</style>
