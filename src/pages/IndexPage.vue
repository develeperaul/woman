<template>
  <q-page class="tw-container">
    <QualityControl v-model="open" />
    <div class="tw-mb-7.5">
      <div class="tw-mb-5">
        <img src="/logo.svg" alt="" width="89" />
      </div>
      <div
        v-if="storyList.loading"
        class="tw-flex tw-gap-2.5 tw-overflow-auto scroll-none"
      >
        <q-skeleton
          v-for="n in 10"
          size="90px"
          class="tw-rounded-2xl tw-shrink-0"
        />
      </div>
      <Stories v-else :stories="storyList.data" />
    </div>
    <div class="tw-mb-5">
      <div v-if="upcomingRecord.loading">
        <q-skeleton height="172px" class="tw-rounded-2xl" />
      </div>
      <template v-else>
        <UpcomingRecord
          v-if="upcomingRecord.data"
          :upcomingRecord="upcomingRecord.data"
        />
      </template>
    </div>
    <div class="tw-mb-7.5">
      <div v-if="lastRecord.loading">
        <q-skeleton height="390px" class="tw-rounded-2xl" />
      </div>
      <template v-else>
        <Fast v-if="lastRecord.data" :dataRecord="lastRecord.data" />
      </template>
    </div>
    <div class="tw-mb-6">
      <OurServices :servises="serviceCategoryList" />
    </div>
    <div class="tw-mb-7.5">
      <Masters :masters="masters" :servises="serviceCategoryList" />
    </div>

    <About :salons="salonList" />
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
const storeMain = mainStore();
const {
  storyList,
  upcomingRecord,
  lastRecord,
  serviceCategoryList,
  salonLocal,
  salonList,
  masters,
} = storeToRefs(storeMain);
// const storeAuth = authStore();
// await storeAuth.login('+79613639044');
const getData = () => {
  Promise.allSettled([
    storeMain.getStories(),
    storeMain.getUpcomingEntry(),
    storeMain.getLastJournalRecord(),
    storeMain.getServiceCategories(),
  ]);
};
useGetData(getData);
onMounted(() => {
  setTimeout(() => (open.value = true), 1000);
});
watchEffect(async () => {
  if (serviceCategoryList.value.data && salonLocal.value) {
    console.log(salonLocal.value.id);

    storeMain.getmasters({
      salon_id: salonLocal.value.id,
      category_id: serviceCategoryList.value.data[0].id,
    });
  }
});
</script>
