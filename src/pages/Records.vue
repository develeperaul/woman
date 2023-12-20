<template>
  <q-page class="tw-container">
    <tab-head v-model="tab" :options="tabs" class="tw-mb-6" />
    <tab-body v-model="tab">
      <tab-content :name="1">
        <div v-if="true" class="tw-grid tw-gap-3">
          <Record
            v-for="(record, index) in records"
            @cancel="cancel(index)"
            :name="record.service.name"
            :date="`${dayjs(record.date.day)
              .locale('ru')
              .format('DD MMMM (dd)')} ${record.date.time}`"
            :master="record.master.name"
            address="Проспект Октября, 105"
            past
          />
        </div>
        <div v-else class="tw-flex tw-justify-center tw-mt-20">
          У вас нет предстоящих записей
        </div>
      </tab-content>

      <tab-content :name="2">
        <div v-if="false" class="tw-grid tw-gap-3">
          <Record
            @cancel="cancel(3)"
            name="Маникюр"
            date="30 октября (вт) 12:00"
            master="Оксана Егорова"
            address="Проспект Октября, 105"
          />
        </div>
        <div v-else class="tw-flex tw-justify-center tw-mt-20">
          У вас нет прошлых записей
        </div>
      </tab-content>
    </tab-body>
    <Cancel v-model="open" />
  </q-page>
</template>
<script setup lang="ts">
import Record from 'src/components/Card/Record.vue';
import Cancel from 'src/components/Modal/Cancel.vue';
import { storeToRefs } from 'pinia';
import dayjs from 'dayjs';
import 'src/utils/locale-ru';
const storeRecords = recordsStore();
const { records } = storeToRefs(storeRecords);
const tab = ref(1);
const tabs = [
  {
    name: 1,
    label: 'Предстоящие',
  },
  {
    name: 2,
    label: 'Прошлые',
  },
];

const open = ref(false);

const cancel = (val: number) => {
  console.log(val);
  open.value = true;
};
</script>
<style lang="scss" scoped></style>
