<template>
  <router-view />
</template>

<script setup lang="ts">
import { getAccessToken } from './api/tokens';

const storeMain = mainStore();
onMounted(async () => {
  if (getAccessToken()) await storeMain.getSalons();
});
// getSalons
</script>
