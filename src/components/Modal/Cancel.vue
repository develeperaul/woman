<template>
  <popup v-model="open">
    <div class="tw-px-5.5 tw-grid tw-justify-items-center tw-text-center">
      <template v-if="!success">
        <img src="src/assets/img/info.png" alt="" class="tw-mb-4" />
        <div class="tw-text-h2 tw-font-semibold tw-mb-5">
          Вы действительно хотите отменить запись?
        </div>
        <div class="tw-flex tw-gap-5">
          <base-button theme="border" @click="remove" class="!tw-w-[98px]">
            Да
          </base-button>

          <base-button
            theme="gradient"
            @click="open = null"
            class="!tw-w-[98px]"
          >
            Нет
          </base-button>
        </div>
      </template>
      <template v-else>
        <img src="src/assets/img/call.png" alt="" class="tw-mb-4" />
        <div class="tw-text-h2 tw-font-semibold tw-mb-5">
          Ваша запись отменена
        </div>

        <base-button theme="gradient" @click="open = null">
          Закрыть
        </base-button>
      </template>
    </div>
  </popup>
</template>
<script setup lang="ts">
const props = defineProps<{
  modelValue: number | null;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', val: number | null): void;
  (e: 'success', val: boolean): void;
}>();
const open = ref<number | null>(null);

const success = ref(false);
const checkout = () => {
  success.value = true;
};
const remove = async () => {
  if (open.value) {
    await recordsStore().delRecord(open.value);
    open.value = null;
    success.value = false;
  }
};
onMounted(() => (open.value = props.modelValue));
watch(
  () => props.modelValue,
  (val) => (open.value = val)
);
watch(open, (val: number | null) => emit('update:modelValue', val));
</script>
<style lang="scss" scoped></style>
