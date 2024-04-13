<template>
  <teleport to="body">
    <div v-if="modelValue" class="modal">
      <img
        src="~/assets/img/succes.png"
        class="tw-w-[197px] tw-h-[147px] tw-mb-6 tw-mx-auto"
        alt=""
      />
      <div class="title tw-mb-6 tw-text-center">Вы успешно записаны!</div>
      <div class="card tw-w-full tw-mb-7.5">
        <div class="tw-font-semibold tw-text-t1 tw-mb-1.5">
          {{ modelValue.service }}
        </div>

        <div class="tw-flex tw-items-center tw-gap-2.5 tw-mb-5">
          <base-icon name="calendar" class="tw-w-6 tw-h-6 tw-text-primaryto" />
          <div>
            {{
              dayjs(modelValue.date).locale('ru').format('D MMMM (dd) HH:mm')
            }}
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-1.5">
          <div class="tw-text-gray2">Мастер</div>
          <div>{{ modelValue.personnel }}</div>
        </div>
        <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5">
          <div class="tw-text-gray2">Адрес</div>
          <div style="word-break: break-all">{{ modelValue.address }}</div>
        </div>
      </div>
      <base-button
        theme="gradient"
        class="tw-w-full"
        @click="
          () => (
            $router.push({ name: 'home' }),
            $emit('update:modelValue', null),
            recordsStore().rezetDataStore()
          )
        "
      >
        Готово
      </base-button>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import { RecordServiceT } from 'src/models/api/recording';

const props = defineProps<{
  modelValue: RecordServiceT;
}>();
</script>
<style lang="scss" scoped>
.modal {
  @apply tw-fixed tw-top-0 tw-left-0 tw-bg-whitedarken tw-w-full tw-h-full tw-px-12 tw-pt-[60px];
  z-index: 10001;
}
</style>
