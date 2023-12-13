<template>
  <div
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday,
    }"
    ref="dayEl"
  >
    <div class="item" @click="openEventList" :class="{ active: popupEvents }">
      {{ label }}
    </div>

    <EventType
      v-if="events && events?.length > 0"
      :eventsLength="events.length"
      class="event"
    />

    <div class="events" v-if="events">
      <transition
        appear
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
        mode="out-in"
      >
        <EventList
          v-if="popupEvents"
          :events="events"
          class="events__wrapper"
          ref="popupEl"
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue';
import type { PropType } from 'vue';
import dayjs from 'dayjs';
import EventType from './EventType.vue';
import EventList from './EventList.vue';
interface Event {
  id: number;

  src: string;
  text: string;
  link: string;
}

export default defineComponent({
  name: 'month-day-item',
  components: {
    EventType,
    EventList,
  },
  props: {
    day: {
      type: Object,
      required: true,
    },

    isCurrentMonth: {
      type: Boolean,
      default: false,
    },

    isToday: {
      type: Boolean,
      default: false,
    },
    events: {
      type: Array as PropType<Event[] | null>,
      default: null,
    },
  },
  setup(props) {
    const dayEl = ref<HTMLElement>();
    const popupEl = ref<HTMLElement>();
    const popupEvents = ref(false);
    const openEventList = () => {
      if (props.events && !popupEvents.value) {
        window.addEventListener('click', clickAnotherWindow);
        return (popupEvents.value = true);
      }
      if (props.events && popupEvents.value) {
        // console.log("hi");
        window.removeEventListener('click', clickAnotherWindow);
        return (popupEvents.value = false);
      }
    };
    const clickAnotherWindow = (e: Event) => {
      let currentElem = e.target;
      let open = false;
      while (currentElem) {
        if (currentElem == dayEl.value) {
          console.log(e.target);
          open = true;
          break;
        } else currentElem = currentElem.parentElement;
      }
      if (
        !open &&
        popupEvents.value &&
        popupEl.value &&
        !e.composedPath().includes(popupEl.value)
      ) {
        popupEvents.value = false;
        window.removeEventListener('click', clickAnotherWindow);
      }
      // console.log("t");

      // if (
      //   popupEvents.value &&
      //   !e?.target &&
      //   !e.target.closest("circle") &&
      //   !e.composedPath().includes(card.value)
      // ) {
      //   popupEvents.value = false;
      // }
    };
    onMounted(() => {
      // window.addEventListener("click", clickAnotherWindow);
    });
    return {
      label: computed(() => dayjs(props.day.date).format('D')),
      popupEvents,
      openEventList,
      dayEl,
      popupEl,
    };
  },
});
</script>

<style lang="scss" scoped>
.calendar-day {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    @apply tw-rounded-full;
    width: 36px;
    z-index: 1;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 1.4s cubic-bezier(0.19, 1, 0.22, 1);
    cursor: pointer;
    &:hover,
    &.active {
      @apply tw-bg-red-600;
    }
  }
  .event {
    @apply tw-absolute  tw-bottom-1;
  }
  .events {
    @apply tw-absolute tw-left-0 tw-top-full tw-transform tw-translate-y-2.5 tw-z-50 tw-overflow-hidden;
  }
}
</style>
