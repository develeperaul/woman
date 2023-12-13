<template>
  <q-page class="tw-container">
    <tab-head v-model="tab" :options="tabs" class="tw-mb-6" />
    <tab-body v-model="tab">
      <tab-content :name="1" class="tw-grid tw-gap-3">
        <BonusHistoryItem
          v-for="n in 10"
          v-bind="{
            title: 'Женская стрижка',
            summ: '1 000',
            date: '21.10.2023',
            bonus: '30',
          }"
        />
      </tab-content>
      <tab-content :name="2"> </tab-content>
      <tab-content :name="3"> </tab-content>
    </tab-body>
  </q-page>
</template>
<script setup lang="ts">
import BonusHistoryItem from 'src/components/Card/BonusHistoryItem.vue';
const tab = ref(1);
const tabs = [
  {
    name: 1,
    label: 'Все операции',
  },
  {
    name: 2,
    label: 'Начисления',
  },
  {
    name: 3,
    label: 'Списания',
  },
];
</script>
<style lang="scss" scoped></style>
