<template>
  <Teleport to="body">
    <div class="modal-wrapper" v-if="modelValue">
      <div
        class="modal env-b"
        :style="{
          height: fit ? 'auto' : full ? 'calc(100vh - 80px)' : '356px',
        }"
      >
        <q-btn
          round
          flat
          class="tw-absolute tw-right-4 tw-top-4"
          @click="$emit('update:modelValue', false)"
        >
          <base-icon name="close" class="tw-w-4.5 tw-h-4.5 tw-text-[#BDBCBC]" />
        </q-btn>
        <slot />
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    full?: boolean;
    fit?: boolean;
  }>(),
  {
    full: false,
    fit: false,
  }
);
watch(
  () => props.modelValue,
  (val) => {
    const body = document.querySelector('body');
    console.log(body);

    if (body) {
      if (val) body.classList.add('tw-overflow-hidden');
      else body.classList.remove('tw-overflow-hidden');
    }
  }
);
</script>
<style lang="scss" scoped>
.modal-wrapper {
  @apply tw-fixed tw-bg-black/50 tw-w-full tw-h-full tw-top-0 tw-left-0;
  z-index: 10001;
}
.modal {
  @apply tw-bg-white tw-rounded-t-2xl tw-w-full tw-pt-14;
  @apply tw-absolute tw-bottom-0;
}
</style>
