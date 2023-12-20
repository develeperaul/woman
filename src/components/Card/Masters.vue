<template>
  <div>
    <div class="title tw-mb-3">Мастера</div>
    <div class="tw-grid tw-gap-3">
      <div class="tw-flex tw-gap-4 tw-overflow-auto scroll-none -tw-mx-5.5">
        <button
          v-for="(n, index) in servises"
          :key="index"
          class="tab"
          :class="[
            { 'tw-ml-5.5': index === 0 },
            { 'tw-mr-5.5': index === tabs.length - 1 },
            { active: n.id === tab },
          ]"
          @click="tab = n.id"
        >
          {{ n.name }}
        </button>
      </div>

      <div
        v-if="filterMasters.length > 0"
        class="tw-flex tw-gap-4 tw-overflow-auto scroll-none -tw-mx-5.5"
      >
        <div
          v-for="(master, index) in filterMasters"
          @click="$router.push({ name: 'master', params: { id: master.id } })"
          class="card tw-flex tw-items-center tw-gap-2.5 tw-shrink-0"
          :class="[
            { 'tw-ml-5.5': index === 0 },
            { 'tw-mr-5.5': index === masters.length - 1 },
            ,
          ]"
        >
          <q-avatar size="54px">
            <img :src="master.url" alt="" />
          </q-avatar>
          <div class="tw-grid tw-gap-1">
            <div class="tw-text-t2">
              {{ master.name }}
            </div>
            <div class="tw-text-[#8E8C8C] tw-text-t3">
              {{ master.position }}
            </div>
          </div>
        </div>
      </div>

      <div v-else>Мастеров нет</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Master, Servise } from 'src/models';
const props = defineProps<{
  masters: Master[];
  servises: Servise[];
}>();
const tab = ref<number>(1);
const tabs = [
  {
    id: 1,
    name: 'Стрижки',
  },
  {
    id: 2,
    name: 'Маникюр',
  },
  {
    id: 3,
    name: 'Педикюр',
  },
  {
    id: 4,
    name: 'Брови',
  },
];

const filterMasters = computed(() => {
  return props.masters.filter((item) => {
    return item.servicesList.find((service) => service.id === tab.value);
  });
});

const masters = ref<{ id: number; name: string; job: string; url: string }[]>(
  []
);
</script>
<style lang="scss" scoped>
.tab {
  @apply tw-bg-white tw-rounded-lg tw-text-t2 tw-text-gray2 tw-py-2.5 tw-px-4;
  border: 1px solid #e2e2e2;
  transition: all 0.3s ease-in-out;
  &.active {
    @apply tw-bg-filter tw-border-filter tw-text-white;
  }
}
</style>
