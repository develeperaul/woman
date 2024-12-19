<template>
  <q-layout view="lhh Lpr lFf">
    <q-header v-if="data.other" class="bg-head2 env-t tw-pb-5">
      <div class="tw-container">
        <div class="">
          <!-- <img src="/logo.svg" alt="" width="89" /> -->
        </div>
      </div>
    </q-header>
    <!-- <q-header>
    </q-header> -->
    <q-page-container :class="{ 'bg-head': !data.other }">
      <router-view class="env-t" />
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
