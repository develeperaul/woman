<template>
  <div class="day-of-week">
    <div class="item" v-for="day in days" :key="day">{{ day }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "week-days",
  setup(props) {
    return {
      days: computed(() => ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]),
    };
  },
});
</script>

<style lang="scss" scoped>
.day-of-week {
  display: grid;
  grid-template-columns: repeat(7, 36px);
  .item {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
