<template>
  <q-page class="tw-container">
    <div class="card tw-mb-5">
      <div
        class="tw-text-t1 tw-font-semibold tw-mb-2.5"
        v-if="dataRecord.service"
      >
        {{ dataRecord.service.name }}
      </div>
      <div
        class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-1.5"
        v-if="dataRecord.master"
      >
        <div class="tw-text-gray2">Мастер</div>
        <div>{{ dataRecord.master.name }}</div>
      </div>
      <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-2.5">
        <div class="tw-text-gray2">Адрес</div>

        <div>
          {{ mainStore().salonLocal.city }} {{ mainStore().salonLocal.street }},
          {{ mainStore().salonLocal.number_house }}
        </div>
      </div>
      <div class="tw-text-t1 tw-flex tw-gap-5" v-if="dataRecord.service">
        <div>{{ dataRecord.service.price_from }}</div>
        <div class="tw-text-[#8E8C8C]">{{ dataRecord.service.time }}</div>
      </div>
    </div>
    <div class="tw-mb-7.5">
      <AppCalendar
        @current="current"
        @selectDate="selectDate"
        :availableDays="availableDayList.data"
        :availableTimes="availableTimeList.data"
      />
    </div>

    <base-button
      :disabled="!(dataRecord.day && dataRecord.time)"
      theme="gradient"
      @click="record"
    >
      Записаться
    </base-button>
    <SuccessRecord v-model="message" />
  </q-page>
</template>
<script setup lang="ts">
import AppCalendar from 'src/components/AppCalendar.vue';
import { Record } from 'src/models';
import { RecordServiceT } from 'src/models/api/recording';
import SuccessRecord from 'src/components/Modal/SuccessRecord.vue';
import { useRouter } from 'vue-router';
import dayjs, { Dayjs } from 'dayjs';

const { dataRecord, availableDayList, availableTimeList } = storeToRefs(
  recordsStore()
);

const storeRecords = recordsStore();
const storeSerives = servisesStore();
const { masters } = storeToRefs(storeSerives);
const success = ref(false);
const currentSelectDay = ref<Dayjs>(dayjs());
const message = ref<RecordServiceT | null>();
const selectDate = (e: { day: string; time: number } | null) => {
  if (e) {
    dataRecord.value.day = e.day;
    dataRecord.value.time = e.time;
  }
};
const current = (e: Dayjs) => {
  currentSelectDay.value = e;
  getData();
};
const record = async () => {
  if (
    dataRecord.value.master &&
    dataRecord.value.time &&
    dataRecord.value.service
  )
    message.value = await storeRecords.record({
      personnel_id: dataRecord.value.master.id,
      work_slot_id: dataRecord.value.time,
      service_id: dataRecord.value.service.id,
    });

  success.value = true;
};

const getData = () => {
  if (dataRecord.value.master && dataRecord.value.service)
    Promise.allSettled([
      storeRecords.getAvailableDays({
        personnel_id: dataRecord.value.master.id as number,
        year: currentSelectDay.value.format('YYYY'),
        month: currentSelectDay.value.format('MM'),
      }),
      storeRecords.getAvailableTimes({
        service_id: dataRecord.value.service.id,
        personnel_id: dataRecord.value.master.id as number,
        date: currentSelectDay.value.format('YYYY-MM-DD'),
      }),
    ]);
};

onMounted(() => {
  if (dataRecord.value.service === null || dataRecord.value.master === null)
    return useRouter().push({ name: 'to-record' });
});
</script>
<style lang="scss" scoped>
.modal {
  @apply tw-fixed tw-top-0 tw-w-full tw-h-full tw-bg-whitedarken tw-grid tw-content-center tw-justify-items-center tw-px-12;
  z-index: 10000;
}
</style>
