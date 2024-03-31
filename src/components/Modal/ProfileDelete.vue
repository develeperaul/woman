<template>
  <popup v-model="open" fit>
    <div class="tw-px-5.5 tw-grid tw-justify-items-center tw-text-center">
      <div class="tw-text-h2 tw-font-semibold tw-mb-5">
        Вы действительно хотите <br />
        удалить аккаунт?
      </div>
      <div class="tw-flex tw-gap-5">
        <base-button theme="border" @click="checkout" class="!tw-w-[98px]">
          Да
        </base-button>
        <base-button theme="gradient" @click="checkout" class="!tw-w-[98px]">
          Нет
        </base-button>
      </div>
    </div>
  </popup>
</template>
<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();
const open = ref(false);

const checkout = async () => {
  await profileStore().delUser();
};
onMounted(() => (open.value = props.modelValue));
watch(
  () => props.modelValue,
  (val) => (open.value = val)
);
watch(open, (val: boolean) => emit('update:modelValue', val));
</script>
<style lang="scss" scoped></style>
