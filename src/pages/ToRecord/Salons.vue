<template>
  <q-page class="tw-container">
    <div class="tw-grid tw-gap-4">
      <div
        v-for="(salon, index) in storeMain.salonList.data"
        class="salon"
        :class="{ active: salon.id === dataRecord.currentSalon }"
        @click="dataRecord.currentSalon = salon.id"
      >
        {{ salon.street }}
      </div>
    </div>
    <base-button
      theme="border"
      class="tw-mt-[55px]"
      @click="() => $router.push({ name: typeRecord })"
    >
      Продолжить
    </base-button>
  </q-page>
</template>
<script setup lang="ts">
const props = defineProps<{
  typeRecord: string;
}>();

const storeMain = mainStore();

const { dataRecord } = storeToRefs(recordsStore());

onMounted(() => {
  dataRecord.value.currentSalon = storeMain.salonLocal.id;
});
</script>
<style lang="scss" scoped>
.salon {
  @apply tw-bg-white  tw-text-t1 tw-p-5 tw-rounded-10 tw-cursor-pointer;
  &.active {
    @apply tw-bg-category tw-text-white tw-shadow-btn;
  }
}
</style>
