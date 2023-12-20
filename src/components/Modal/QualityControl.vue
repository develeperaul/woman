<template>
  <popup v-model="open" full>
    <div class="tw-px-10 tw-grid tw-text-center tw-justify-items-center">
      <template v-if="!success">
        <img src="src/assets/img/stars.png" alt="" />
        <div class="tw-text-h2 tw-font-semibold tw-mb-3">Оцените наш салон</div>
        <div class="tw-mb-5">
          <p class="tw-mb-1">Недавно вы посетили наш салон.</p>
          <p>Пожалуйста, оцените качество услуг по 5-балльной шкале.</p>
        </div>
        <div class="tw-flex tw-gap-2 tw-mb-10">
          <button
            @click="rating = 1"
            class="tw-w-10 tw-h-10 tw-text-t1 tw-rounded-full tw-grid tw-place-content-center tw-leading-none"
            :class="rating >= 1 ? ' tw-bg-yellow' : 'tw-bg-gray4'"
          >
            1
          </button>
          <button
            @click="rating = 2"
            class="tw-w-10 tw-h-10 tw-text-t1 tw-rounded-full tw-grid tw-place-content-center tw-leading-none"
            :class="rating >= 2 ? ' tw-bg-yellow' : 'tw-bg-gray4'"
          >
            2
          </button>
          <button
            @click="rating = 3"
            class="tw-w-10 tw-h-10 tw-text-t1 tw-rounded-full tw-grid tw-place-content-center tw-leading-none"
            :class="rating >= 3 ? ' tw-bg-yellow' : 'tw-bg-gray4'"
          >
            3
          </button>
          <button
            @click="rating = 4"
            class="tw-w-10 tw-h-10 tw-text-t1 tw-rounded-full tw-grid tw-place-content-center tw-leading-none"
            :class="rating >= 4 ? ' tw-bg-yellow' : 'tw-bg-gray4'"
          >
            4
          </button>
          <button
            @click="rating = 5"
            class="tw-w-10 tw-h-10 tw-text-t1 tw-rounded-full tw-grid tw-place-content-center tw-leading-none"
            :class="rating >= 5 ? ' tw-bg-yellow' : 'tw-bg-gray4'"
          >
            5
          </button>
        </div>
        <base-button theme="gradient" @click="sendRating">
          Отправить
        </base-button>
      </template>
      <template v-else>
        <img src="src/assets/img/heart.png" alt="" />
        <div class="tw-text-h2 tw-font-semibold tw-mb-3">Спасибо!</div>
        <div class="tw-mb-5">
          <p class="tw-mb-1">Вы помогаете нам улучшить сервис</p>
        </div>

        <base-button theme="gradient" @click="open = false">
          Закрыть
        </base-button>
      </template>
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
const rating = ref<number | null>(null);
const success = ref(false);
const sendRating = () => {
  if (rating.value) success.value = true;
};
onMounted(() => (open.value = props.modelValue));
watch(
  () => props.modelValue,
  (val) => (open.value = val)
);
watch(open, (val: boolean) => emit('update:modelValue', val));
</script>
<style lang="scss" scoped></style>
