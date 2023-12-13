<template>
  <div class="event-list">
    <a v-for="event in events" :key="event.id" :href="event.link" class="item">
      <h6 class="">
        {{ event.text }}
      </h6>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
interface Event {
  id: number;

  src: string;
  text: string;
  link: string;
}

export default defineComponent({
  name: 'event-list',
  props: {
    events: {
      type: Array as PropType<Event[]>,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.event-list {
  @apply tw-border tw-border-solid tw-border-red-700 tw-rounded tw-bg-slate-600 tw-py-1 tw-pl-3;
  width: max-content;
  min-width: 206px;

  .item {
    @apply tw-py-2 tw-pr-3 tw-block;
    &:not(:last-child) {
      @apply tw-border-b tw-border-solid tw-border-red-600;
    }
  }
}
</style>
