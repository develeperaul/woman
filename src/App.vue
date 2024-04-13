<template>
  <router-view />
</template>

<script setup lang="ts">
import { getAccessToken } from './api/tokens';

const storeMain = mainStore();
onMounted(async () => {
  if (getAccessToken()) {
    Promise.allSettled([
      await profileStore().getProfile(),
      await storeMain.getSalons(),
    ]);
  }
});
// getSalons
</script>
