<template>
  <div class="card tw-shadow-base">
    <div class="tw-mb-5">
      <div class="title tw-mb-3.5">Быстрая запись</div>
      <div class="tw-grid tw-gap-4">
        <div class="tw-flex tw-gap-2.5 tw-items-center">
          <div
            class="tw-w-[54px] tw-h-[54px] tw-rounded-full tw-bg-second tw-grid tw-place-content-center"
          >
            <base-icon
              name="scissors-comb"
              class="tw-w-6 tw-h-6 tw-text-title2"
            />
          </div>
          <div class="tw-grid tw-gap-1.5">
            <div class="tw-text-t1">
              {{ dataRecord.service.name }}
            </div>
            <div class="tw-flex tw-gap-4 tw-text-gray2">
              <div>{{ dataRecord.service.price }}</div>
              <div>{{ dataRecord.service.time }}</div>
            </div>
          </div>
        </div>

        <div class="tw-flex tw-gap-2.5 tw-items-center">
          <q-avatar size="54px" class="tw-bg-second">
            <img
              v-if="dataRecord.personal.profile_image"
              :src="dataRecord.personal.profile_image.url"
              alt=""
            />
            <base-icon v-else name="user" class="tw-w-6 tw-h-6" />
          </q-avatar>

          <div class="tw-grid tw-gap-1.5">
            <div class="tw-text-t1">{{ dataRecord.personal.name }}</div>
            <div class="tw-flex tw-gap-4 tw-text-gray2">
              <div>{{ dataRecord.personal.profession }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="title tw-mb-2.5">Ближайшие даты</div>
      <div class="tw-grid tw-gap-4 tw-mb-6">
        <div
          class="tw-flex tw-gap-2.5 tw-overflow-auto scroll-none -tw-mx-4 tw-py-2"
        >
          <button
            v-for="(n, index) in dataRecord.dates"
            class="tw-py-1.5 tw-px-2 tw-rounded-lg tw-grid tw-gap-0.5"
            :class="[
              index === 0 ? 'tw-ml-4' : '',
              selectedDay && selectedDay === n
                ? 'tw-bg-filter  tw-text-white  tw-shadow-btn'
                : 'tw-bg-whitedarken',
            ]"
            @click="selectDate(n)"
          >
            <span> {{ dayjs(n).format('DD.MM') }} </span>
            <span
              :class="[
                selectedDay && selectedDay === n
                  ? '  tw-text-white'
                  : 'tw-text-gray2',
              ]"
            >
              {{ dayjs(n).locale('ru').format('dd') }}
            </span>
          </button>
        </div>
        <div class="tw-flex tw-gap-2.5 tw-overflow-auto scroll-none -tw-mx-4">
          <button
            v-for="(n, index) in availableTimeList.data"
            class="tw-py-3 tw-px-4.5 tw-rounded-10 tw-border"
            :class="[
              index === 0 ? 'tw-ml-4' : '',
              selectedTime === n.id
                ? ' tw-border-primary tw-bg-second'
                : 'tw-border-gray3',
            ]"
            @click="selectedTime = n.id"
          >
            <span class="tw-text-gray2"> {{ n.date }} </span>
          </button>
        </div>
      </div>
      <base-button theme="gradient" @click="record"> Записаться </base-button>
    </div>
    <SuccessRecord v-model="message" />
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import 'src/utils/locale-ru';
import { Record } from 'src/models';
import SuccessRecord from 'src/components/Modal/SuccessRecord.vue';
import { LastJournalRecordT } from 'src/models/api/main';
import { RecordServiceT } from 'src/models/api/recording';

const props = defineProps<{
  dataRecord: LastJournalRecordT;
}>();
const message = ref<RecordServiceT | null>();
const { availableTimeList } = storeToRefs(recordsStore());

const storeRecords = recordsStore();
const success = ref(false);
const selectedDay = ref<string | null>(null);
const selectedTime = ref<number | null>(null);
const selectDate = (day: string) => {
  recordsStore().getAvailableTimes({
    service_id: props.dataRecord.service.id,
    personnel_id: props.dataRecord.personal.id,
    date: dayjs(day).format('YYYY-MM-DD'),
  });

  selectedTime.value = null;
  selectedDay.value = day;

  // if (obj) {
  //   timeList.value = obj.times;
  // }
};
function getDates() {
  return [...Array(10)].map((item, index) => {
    return {
      // day: dayjs().locale('ru').add(index, 'day').format('DD.MM_dd'),
      day: dayjs().locale('ru').add(index, 'day').format('YYYY-MM-DD'),
      times: ['12:00', '13:00', '15:00'],
    };
  });
}

const record = async () => {
  if (selectedTime.value)
    message.value = await storeRecords.record({
      personnel_id: props.dataRecord.personal.id,
      service_id: props.dataRecord.service.id,
      work_slot_id: selectedTime.value,
    });
  selectedDay.value = null;
  selectedTime.value = null;
};
</script>
<style lang="scss" scoped></style>
