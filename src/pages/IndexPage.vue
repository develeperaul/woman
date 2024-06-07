<template>
  <q-page class="tw-container">
    <!-- <QualityControl v-model="open" /> -->
    <div class="tw-mb-7.5">
      <div
        v-if="!data.other"
        class="tw-mb-5 tw-flex tw-items-center tw-justify-between"
      >
        <img src="/logo.svg" alt="" width="89" />
        <div
          class="tw-text-xs tw-text-white tw-flex tw-items-center"
          @click="openSalonList = true"
        >
          <span> {{ salonLocal.street }} </span>
          <base-icon name="down" class="tw-w-6 tw-h-6" />
        </div>
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
    <transition
      appear
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
      mode="out-in"
    >
      <div
        v-if="openSalonList"
        @click="openSalonList = false"
        class="tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-black/70 tw-z-[2001]"
      ></div>
    </transition>
    <transition
      appear
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
      mode="out-in"
    >
      <div
        v-if="openSalonList"
        class="tw-bg-white tw-rounded-t-2xl tw-fixed tw-bottom-0 tw-left-0 tw-w-full tw-py-[49px] tw-px-3 tw-z-[2002] tw-grid tw-gap-2.5"
      >
        <base-icon
          @click="openSalonList = false"
          name="close"
          class="tw-text-[#BDBCBC] tw-w-4 tw-h-4 tw-absolute tw-top-5 tw-right-5"
        />
        <label class="checkbox" v-for="salon in storeMain.salonList.data">
          <input v-model="currentSalon" type="radio" hidden :value="salon.id" />
          <span> {{ salon.city }} {{ salon.street }} </span>
        </label>
      </div>
    </transition>
  </q-page>
</template>

<script setup lang="ts">
import data from '/public/data.json';
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
const openSalonList = ref(false);
const currentSalon = ref<null | number>();
const { salonLocal } = storeToRefs(storeMain);
onMounted(() => {
  if (storeMain.salonLocal) currentSalon.value = salonLocal.value.id;
});
watch(salonLocal, (val, old) => {
  if (Object.keys(old).length == 0 && Object.keys(val).length > 0) {
    currentSalon.value = val.id;
  }
});
watch(currentSalon, (val) => {
  if (val !== salonLocal.value.id) {
    const salon = storeMain.salonList.data.find((s) => s.id === val);
    console.log(salon);

    if (salon) {
      salonLocal.value = salon;
      openSalonList.value = false;
    }
  }
});
const {
  storyList,
  upcomingRecord,
  lastRecord,
  serviceCategoryList,
  salonList,
  masters,
} = storeToRefs(storeMain);
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
</script>
<style scoped lang="scss">
.checkbox {
  span {
    position: relative;
    padding-left: 42px;

    &::before {
      content: '';
      @apply tw-w-5 tw-h-5 tw-rounded-full tw-border tw-border-[#D5D5D5] tw-absolute tw-top-0 tw-left-0;
    }

    &::after {
      content: '';
      @apply tw-w-2 tw-h-2 tw-rounded-full tw-bg-icons tw-opacity-0 tw-absolute tw-top-1.5 tw-left-1.5;
    }
  }

  input:checked + span::before {
    @apply tw-border-icons;
  }
  input:checked + span::after {
    @apply tw-opacity-100;
  }
}
</style>
