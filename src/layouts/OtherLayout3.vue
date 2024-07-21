<template>
  <q-layout view="lHh Lpr lFf" class="env-t env-b">
    <q-header v-if="$route.meta?.title">
      <Header />
    </q-header>

    <q-page-container>
      <router-view class="tw-pt-5" />
    </q-page-container>
    <q-footer class="tw-bg-transparent" v-if="$route.meta?.footer">
      <Footer />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import Header from 'src/components/Layout/Header.vue';
import Footer from 'src/components/Layout/Footer.vue';
</script>
