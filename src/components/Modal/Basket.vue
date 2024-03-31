<template>
  <popup v-model="open">
    <div
      class="tw-px-5.5 tw-grid tw-justify-items-center"
      :class="success ? ' tw-text-center' : ''"
    >
      <template v-if="!success">
        <img src="src/assets/img/basket.png" alt="" class="tw-mb-4" />
        <div class="tw-text-h2 tw-font-semibold tw-mb-1.5">
          Для заказа товара нажмите «оформить заказ».
        </div>
        <div class="tw-mb-5">
          <p>Мы свяжемся с вами и сообщим, как получить товар.</p>
        </div>

        <base-button theme="gradient" @click="checkout">
          Оформить заказ
        </base-button>
      </template>
      <template v-else>
        <img src="src/assets/img/call.png" alt="" class="tw-mb-4" />
        <div class="tw-text-h2 tw-font-semibold tw-mb-3">Спасибо за заказ!</div>
        <div class="tw-mb-5">
          <p class="tw-mb-1">
            Мы свяжемся с Вами <br />
            в ближайшее время.
          </p>
        </div>

        <base-button theme="gradient" @click="open = false" class="tw-mb-5">
          Закрыть
        </base-button>
      </template>
    </div>
  </popup>
</template>
<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  id: string;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();
const open = ref(false);

const success = ref(false);
const checkout = async () => {
  try {
    await cosmeticsStore().orderProduct(+props.id);

    success.value = true;
  } catch (e) {
    throw e;
  }
};

onMounted(() => (open.value = props.modelValue));
watch(
  () => props.modelValue,
  (val) => (open.value = val)
);
watch(open, (val: boolean) => emit('update:modelValue', val));
</script>
<style lang="scss" scoped></style>
