<template>
  <div class="tw-grid tw-gap-5">
    <div class="calendar card card_round-lg">
      <DateIndicator
        :selectDate="selectedDate"
        class="tw-flex tw-justify-center tw-mb-7.5 tw-capitalize"
        @dateSelected="dateSelected"
      />
      <WeekDays />
      <div class="days">
        <div v-for="item in currentMonthWeekFirstDay" :key="item"></div>
        <MonthDayItem
          v-for="day in currentMonthDays"
          :is-active="selectDate === day.date"
          :key="day.date"
          :day="day"
          :is-today="day.date === today"
          @chooseDay="chooseDay"
        />
      </div>
    </div>

    <div
      v-if="selectDate"
      class="tw-flex tw-gap-2.5 tw-overflow-auto scroll-none -tw-mx-4"
    >
      <button
        v-for="(item, index) in timeList"
        class="tw-rounded-10 tw-px-4 tw-h-[45px] tw-text-t1"
        :class="[
          time === item ? ' tw-bg-green tw-text-white ' : 'tw-bg-white',
          index === 0 ? 'tw-ml-4' : '',
        ]"
        @click="time = item"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import 'src/utils/locale-ru';
import { defineComponent, computed, ref, reactive, onMounted } from 'vue';
import DateIndicator from './Calendar/DateIndicator.vue';
import WeekDays from './Calendar/WeekDays.vue';
import MonthDayItem from './Calendar/MonthDayItem.vue';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekday);
interface Event {
  id: number;

  src: string;
  text: string;
  link: string;
}
export default defineComponent({
  name: 'app-calendar',
  components: {
    DateIndicator,
    WeekDays,
    MonthDayItem,
  },
  emits: ['selectDate'],
  setup(props, { emit }) {
    const selectDate = ref('');

    const days = ref([]);
    const selectedDate = ref(dayjs().locale('ru'));

    const time = ref<string | null>(null);
    const timeList = ref<string[]>([
      '10:00',
      '11:00',
      '12:00',
      '14:00',
      '15:00',
    ]);
    const today = computed(() => dayjs().format('YYYY-MM-DD'));
    const month = computed(() => Number(selectedDate.value.format('M')));
    const year = computed(() => Number(selectedDate.value.format('YYYY')));
    const numberOfDaysInMonth = computed(() =>
      dayjs(selectedDate.value).daysInMonth()
    );
    const getWeekday = (date) => {
      return dayjs(date).locale('ru').weekday();
    };
    const currentMonthWeekFirstDay = computed(() => {
      const month = Number(selectedDate.value.format('M'));
      const year = Number(selectedDate.value.format('YYYY'));
      const lastDayOfTheMonthWeekday = getWeekday(`${year}-${month}-01`);
      return lastDayOfTheMonthWeekday;
    });
    const currentMonthDays = computed(() =>
      [...Array(numberOfDaysInMonth.value)].map((day, index) => {
        const d = dayjs(`${year.value}-${month.value}-${index + 1}`);

        return {
          date: d.format('YYYY-MM-DD'),
          past: d.isBefore(dayjs()),
          isReserve: index === 2 ? true : false,
          isCurrentMonth: true,
          events:
            index == 0
              ? [
                  {
                    id: 0,
                    link: '#',
                    src: 'src',
                    text: 'Поездка в Нефтекамск',
                  },
                  {
                    id: 1,
                    link: '#',
                    src: 'src',
                    text: 'Встреча с гражданами ',
                  },
                  {
                    id: 2,
                    link: '#',
                    src: 'src',
                    text: 'Посещение covid-госпиталя',
                  },
                ]
              : null,
        };
      })
    );

    const dateSelected = (newSelectedDate) => {
      selectedDate.value = newSelectedDate;
    };
    const chooseDay = (day) => {
      selectDate.value = day.date;
    };
    onMounted(() => {
      // console.log(dayjs().month(0).daysInMonth());
      // console.log(dayjs(selectedDate.value).daysInMonth());
      // console.log(dayjs().locale("ru"));
    });

    watch(selectDate, () => {
      time.value = null;
    });

    watch(time, (val) => {
      console.log(val);

      if (val === null) emit('selectDate', null);
      else emit('selectDate', { day: selectDate.value, time: val });
    });
    return {
      days,
      currentMonthDays,
      today,
      selectedDate,
      dateSelected,
      currentMonthWeekFirstDay,
      selectDate,
      chooseDay,
      time,
      timeList,
    };
  },
});
</script>

<style lang="scss" scoped>
.calendar {
  @apply tw-w-full tw-py-4 tw-px-5.5;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 27px);
  justify-content: space-between;
  row-gap: 12px;
}
</style>
