<template>
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
        :key="day.date"
        :day="day"
        :is-today="day.date === today"
        :events="day.events"
      />
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
  setup(props) {
    const days = ref([]);
    const selectedDate = ref(dayjs().locale('ru'));
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
        return {
          date: dayjs(`${year.value}-${month.value}-${index + 1}`).format(
            'YYYY-MM-DD'
          ),
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
    onMounted(() => {
      // console.log(dayjs().month(0).daysInMonth());
      // console.log(dayjs(selectedDate.value).daysInMonth());
      // console.log(dayjs().locale("ru"));
    });
    return {
      days,
      currentMonthDays,
      today,
      selectedDate,
      dateSelected,
      currentMonthWeekFirstDay,
    };
  },
});
</script>

<style lang="scss" scoped>
.calendar {
  @apply tw-w-fit tw-py-4 tw-px-5.5;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 36px);
  row-gap: 4px;
}
</style>
