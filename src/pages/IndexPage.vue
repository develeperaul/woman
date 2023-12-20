<template>
  <q-page class="tw-container">
    <QualityControl v-model="open" />

    <div class="tw-mb-5">
      <img src="/logo.svg" alt="" width="89" />
    </div>
    <Stories class="tw-mb-7.5" />
    <UpcomingRecord class="tw-mb-5" />
    <Fast class="tw-mb-7.5" :master="storeSerives.masters[0]" />
    <OurServices class="tw-mb-6" :servises="storeSerives.servicesList" />
    <Masters
      class="tw-mb-7.5"
      :masters="storeSerives.masters"
      :servises="storeSerives.servicesList"
    />
    <About />
  </q-page>
</template>

<script setup lang="ts">
import Stories from 'src/components/Stories/Index.vue';
import UpcomingRecord from 'src/components/Card/UpcomingRecord.vue';
import Fast from 'src/components/Card/Fast.vue';
import OurServices from 'src/components/Card/OurServices.vue';
import Masters from 'src/components/Card/Masters.vue';
import About from 'src/components/Card/About.vue';

import QualityControl from 'src/components/Modal/QualityControl.vue';

const open = ref(false);

const storeSerives = servisesStore();

onMounted(() => {
  setTimeout(() => (open.value = true), 1000);
});
</script>
