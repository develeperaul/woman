<template>
  <q-layout view="lhh Lpr lFf">
    <q-page-container :class="{ 'bg-head': !data.other }">
      <router-view />
    </q-page-container>
    <q-footer class="tw-bg-transparent" v-if="$route.meta?.footer">
      <Footer />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import Footer from 'src/components/Layout/Footer.vue';
import data from '/public/data.json';
</script>
