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
              {{ master.servicesList[0].sub_services[0].name }}
            </div>
            <div class="tw-flex tw-gap-4 tw-text-gray2">
              <div>{{ master.servicesList[0].sub_services[0].price }}</div>
              <div>{{ master.servicesList[0].sub_services[0].time }}</div>
            </div>
          </div>
        </div>

        <div class="tw-flex tw-gap-2.5 tw-items-center">
          <q-avatar size="54px">
            <img :src="master.url" alt="" />
          </q-avatar>

          <div class="tw-grid tw-gap-1.5">
            <div class="tw-text-t1">{{ master.name }}</div>
            <div class="tw-flex tw-gap-4 tw-text-gray2">
              <div>{{ master.position }}</div>
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
            v-for="(n, index) in master.dates"
            class="tw-py-1.5 tw-px-2 tw-rounded-lg tw-grid tw-gap-0.5"
            :class="[
              index === 0 ? 'tw-ml-4' : '',
              selectedDay && selectedDay === n.day
                ? 'tw-bg-filter  tw-text-white  tw-shadow-btn'
                : 'tw-bg-whitedarken',
            ]"
            @click="selectDate(n.day)"
          >
            <span> {{ dayjs(n.day).format('DD.MM') }} </span>
            <span
              :class="[
                selectedDay && selectedDay === n.day
                  ? '  tw-text-white'
                  : 'tw-text-gray2',
              ]"
            >
              {{ dayjs(n.day).locale('ru').format('dd') }}
            </span>
          </button>
        </div>
        <div class="tw-flex tw-gap-2.5 tw-overflow-auto scroll-none -tw-mx-4">
          <button
            v-for="(n, index) in timeList"
            class="tw-py-3 tw-px-4.5 tw-rounded-10 tw-border"
            :class="[
              index === 0 ? 'tw-ml-4' : '',
              selectedTime === n
                ? ' tw-border-primary tw-bg-second'
                : 'tw-border-gray3',
            ]"
            @click="selectedTime = n"
          >
            <span class="tw-text-gray2"> {{ n }} </span>
          </button>
        </div>
      </div>
      <base-button theme="gradient" @click="signUp"> Записаться </base-button>
    </div>
    <SuccessRecord v-model="success" />
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import 'src/utils/locale-ru';
import { Master, Record } from 'src/models';
import SuccessRecord from 'src/components/Modal/SuccessRecord.vue';

const props = defineProps<{
  master: Master;
}>();
const fast = ref({
  haircut: {
    name: 'Стрижка женская',
    price: '1 000 ₽',
    time: '1 ч',
  },
  master: {
    name: 'Ксения Попова',
    position: 'Мастер',
    url: '/test.jpeg',
  },
  dates: getDates(),
});
const storeRecords = recordsStore();
const success = ref(false);
const timeList = ref<string[]>([]);
const selectedDay = ref<string | null>(null);
const selectedTime = ref<string | null>(null);
const selectDate = (day: string) => {
  const obj = props.master.dates.find((item) => item.day === day);
  selectedTime.value = null;
  selectedDay.value = day;

  if (obj) {
    timeList.value = obj.times;
  }
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

const signUp = () => {
  const obj = {
    service: {
      name: props.master.servicesList[0].sub_services[0].name,
      duration: props.master.servicesList[0].sub_services[0].time,
      price: props.master.servicesList[0].sub_services[0].price,
    },
    master: {
      name: props.master.name,
      position: props.master.position,
      url: props.master.url,
    },
    date: {
      day: selectedDay.value,
      time: selectedTime.value,
    },
  } as Record;
  storeRecords.addRecords(obj);
  setTimeout(() => (success.value = true), 500);
};
</script>
<style lang="scss" scoped></style>
