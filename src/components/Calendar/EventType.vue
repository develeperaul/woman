<template>
  <span class="event-type" :class="eventColor"> </span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "event-type",
  props: {
    eventsLength: {
      type: [Number, String],
      required: true,
    },
  },
  setup(props) {
    return {
      eventColor: computed(() => {
        console.log(props.eventsLength);

        if (props.eventsLength > 0 && props.eventsLength <= 2)
          return "tw-bg-green";
        if (props.eventsLength > 2 && props.eventsLength <= 4)
          return "tw-bg-yellow";
        return "tw-bg-red";
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
.event-type {
  @apply tw-w-[3px] tw-h-[3px] tw-rounded-full;
}
</style>
