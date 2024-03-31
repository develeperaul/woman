<template>
  <div class="tw-grid">
    <div class="tw-inline-flex tw-gap-4 tw-whitespace-nowrap tw-overflow-auto">
      <tab-item
        v-for="item in options"
        @click="() => $emit('update:modelValue', item.id)"
        :class="{ active: item.id === modelValue }"
      >
        {{ item.name }}
      </tab-item>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'tab-head',
});
</script>
<script setup lang="ts">
interface Option {
  id: string | number;
  name: string;
}
const props = defineProps<{
  modelValue: string | number;
  options: Option[];
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', val: string | number): void;
}>();
</script>
<style lang="scss" scoped></style>
