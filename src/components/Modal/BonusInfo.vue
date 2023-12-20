<template>
  <popup2 v-model="open">
    <div class="tw-px-5 tw-grid" :class="success ? ' tw-text-center' : ''">
      <div class="tw-mb-5">
        <p class="tw-text-t1">
          Для начисления и списания бонусов назовите администратору номер карты
          при посещении салона.
        </p>
      </div>

      <base-button theme="bg" @click="open = false"> Понятно </base-button>
    </div>
  </popup2>
</template>
<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();
const open = ref(false);

const success = ref(false);
const checkout = () => {
  success.value = true;
};
onMounted(() => (open.value = props.modelValue));
watch(
  () => props.modelValue,
  (val) => (open.value = val)
);
watch(open, (val: boolean) => emit('update:modelValue', val));
</script>
<style lang="scss" scoped></style>
