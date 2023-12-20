<template>
  <div
    class="calendar-date-indicator tw-relative tw-text-title-base tw-flex tw-items-center tw-gap-1"
  >
    <q-btn
      @click="prev"
      round
      flat
      class="tw-absolute tw-left-0 tw-top-1/2 tw-transform -tw-translate-y-1/2"
    >
      <base-icon name="back" class="tw-w-6 tw-h-6 tw-text-[#BBB]" />
    </q-btn>
    <span class="tw-text-t0 tw-font-bold">
      {{ selectedMonth }}
    </span>
    <!-- @click="next" -->
    <q-btn
      @click="next"
      round
      flat
      class="tw-absolute tw-right-0 tw-top-1/2 tw-transform -tw-translate-y-1/2"
    >
      <base-icon name="forward" class="tw-w-6 tw-h-6 tw-text-[#BBB]" />
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import dayjs from 'dayjs';
export default defineComponent({
  name: 'date-indicator',

  props: {
    selectDate: {
      type: Object,
      required: true,
    },
  },
  emits: ['dateSelected'],
  setup(props, { emit }) {
    const next = () => {
      let newSelectedDate = dayjs(props.selectDate).add(1, 'month');
      console.log(newSelectedDate);
      emit('dateSelected', newSelectedDate);
    };
    const prev = () => {
      if (dayjs().isBefore(dayjs(props.selectDate), 'month')) {
        let newSelectedDate = dayjs(props.selectDate).subtract(1, 'month');

        emit('dateSelected', newSelectedDate);
      }
    };
    return {
      selectedMonth: computed(() => props.selectDate.format('MMMM')),
      next,
      prev,
    };
  },
});
</script>

<style lang="scss" scoped></style>
