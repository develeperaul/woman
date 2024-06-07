<template>
  <q-page class="tw-container">
    <tab-head v-model="tab" :options="tabs" class="tw-mb-6" />
    <tab-body v-model="tab">
      <tab-content name="upcoming">
        <div v-if="recordList.data.length > 0" class="tw-grid tw-gap-3">
          <Record
            v-for="(record, index) in recordList.data"
            @cancel="cancel(record.id)"
            :name="record.service"
            :date="`${dayjs(record.date)
              .locale('ru')
              .format('DD MMMM (dd) h:m')} `"
            :master="record.personnel"
            :address="record.salon"
            past
            prev
          />
        </div>
        <div v-else class="tw-flex tw-justify-center tw-mt-20">
          У вас нет предстоящих записей
        </div>
      </tab-content>

      <tab-content name="previous">
        <div v-if="recordListPrev.data.length > 0" class="tw-grid tw-gap-3">
          <Record
            v-for="(record, index) in recordListPrev.data"
            :name="record.service"
            :date="`${dayjs(record.date)
              .locale('ru')
              .format('DD MMMM (dd) h:m')} `"
            :master="record.personnel"
            :address="record.salon"
            past
          />
        </div>
        <div v-else class="tw-flex tw-justify-center tw-mt-20">
          У вас нет прошлых записей
        </div>
      </tab-content>
    </tab-body>
    <Cancel v-model="deleteRectordId" />
  </q-page>
</template>
<script setup lang="ts">
import Record from 'src/components/Card/Record.vue';
import Cancel from 'src/components/Modal/Cancel.vue';
import { storeToRefs } from 'pinia';
import dayjs from 'dayjs';
import 'src/utils/locale-ru';
const storeRecords = recordsStore();
const { records, recordList, recordListPrev } = storeToRefs(storeRecords);
const tab = ref('upcoming');
const tabs = [
  {
    id: 'upcoming',
    name: 'Предстоящие',
  },
  {
    id: 'previous',
    name: 'Прошлые',
  },
];

const deleteRectordId = ref<number | null>(null);

const cancel = (val: number) => {
  deleteRectordId.value = val;
};
onMounted(async () => {
  await storeRecords.getRecords('upcoming');
  await storeRecords.getRecords('previous');
});
</script>
<style lang="scss" scoped></style>
