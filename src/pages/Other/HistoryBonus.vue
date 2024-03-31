<template>
  <q-page class="tw-container">
    <tab-head v-model="tab" :options="tabs" class="tw-mb-6" />
    <tab-body v-model="tab">
      <tab-content name="all" class="tw-grid tw-gap-3">
        <BonusHistoryItem
          v-for="item in userBonusHistoryAll.data"
          v-bind="{
            title: item.service,
            summ: item.price,
            date: item.created_at,
            bonus: item.amount,
          }"
        />
      </tab-content>
      <tab-content name="accrual">
        <BonusHistoryItem
          v-for="item in userBonusHistoryAccrual.data"
          v-bind="{
            title: item.service,
            summ: item.price,
            date: item.created_at,
            bonus: item.amount,
          }"
        />
      </tab-content>
      <tab-content name="write_off">
        <BonusHistoryItem
          v-for="item in userBonusHistoryWireOff.data"
          v-bind="{
            title: item.service,
            summ: item.price,
            date: item.created_at,
            bonus: item.amount,
          }"
        />
      </tab-content>
    </tab-body>
  </q-page>
</template>
<script setup lang="ts">
import BonusHistoryItem from 'src/components/Card/BonusHistoryItem.vue';
const tab = ref<'accrual' | 'write_off' | 'all'>('all');
const tabs = [
  {
    id: 'all',
    name: 'Все операции',
  },
  {
    id: 'accrual',
    name: 'Начисления',
  },
  {
    id: 'write_off',
    name: 'Списания',
  },
];
const {
  userBonusHistoryAll,
  userBonusHistoryWireOff,
  userBonusHistoryAccrual,
} = storeToRefs(bonusStore());
onMounted(async () => {
  Promise.allSettled([
    bonusStore().getBonuseHistory('all'),
    bonusStore().getBonuseHistory('accrual'),
    bonusStore().getBonuseHistory('write_off'),
  ]);
});
</script>
<style lang="scss" scoped></style>
