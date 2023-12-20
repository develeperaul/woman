<template>
  <Teleport to="body">
    <div class="modal-wrapper" v-if="modelValue">
      <div class="modal">
        <q-btn
          round
          flat
          class="tw-absolute tw-right-2.5 tw-top-2.5"
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
const props = defineProps<{
  modelValue: boolean;
}>();

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
  @apply tw-bg-white tw-rounded-2xl tw-w-full tw-pt-12 tw-pb-5.5 tw-h-fit;
  @apply tw-absolute tw-left-0 tw-right-0 tw-top-1/2 tw-transform -tw-translate-y-1/2;
  width: calc(100% - 44px);
  margin: auto;
}
</style>
