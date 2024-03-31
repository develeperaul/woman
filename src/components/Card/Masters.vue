<template>
  <div>
    <div class="title tw-mb-3">Мастера</div>

    <div class="tw-grid tw-gap-3">
      <div v-if="servises.loading" class="tw-overflow-auto scroll-none">
        <q-skeleton width="95px" height="38px" class="tw-rounded-2xl" />
      </div>
      <template v-else>
        <div class="tw-flex tw-gap-4 tw-overflow-auto scroll-none -tw-mx-5.5">
          <button
            v-for="(n, index) in tabs"
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
      </template>

      <div
        v-if="masters.loading"
        class="tw-flex tw-gap-4 tw-overflow-auto scroll-none"
      >
        <q-skeleton
          v-for="n in 10"
          width="245px"
          height="85px"
          class="tw-rounded-2xl tw-shrink-0"
        />
      </div>
      <template v-else>
        <div
          v-if="masters.data.length > 0"
          class="tw-flex tw-gap-4 tw-overflow-auto scroll-none -tw-mx-5.5"
        >
          <div
            v-for="(master, index) in masters.data"
            @click="$router.push({ name: 'master', params: { id: master.id } })"
            class="card tw-flex tw-items-center tw-gap-2.5 tw-shrink-0"
            :class="[
              { 'tw-ml-5.5': index === 0 },
              { 'tw-mr-5.5': index === masters.data.length - 1 },
              ,
            ]"
          >
            <q-avatar size="54px" class="tw-bg-second">
              <img
                v-if="master.profile_image"
                :src="master.profile_image.url"
                alt=""
              />
              <base-icon v-else name="user" class="tw-w-6 tw-h-6" />
            </q-avatar>
            <div class="tw-grid tw-gap-1">
              <div class="tw-text-t2">
                {{ master.name }}
              </div>
              <div class="tw-text-[#8E8C8C] tw-text-t3">
                {{ master.profession }}
              </div>
            </div>
          </div>
        </div>

        <div v-else>Мастеров нет</div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DataVal } from 'src/models';
import { ServiseCategoriesT, MasterT } from 'src/models/api/main';
const props = defineProps<{
  servises: DataVal<ServiseCategoriesT[]>;
  masters: DataVal<MasterT[]>;
}>();
const tab = ref<number>(1);
const tabs = ref<ServiseCategoriesT[]>([]);

// const filterMasters = computed(() => {
//   return props.masters.filter((item) => {
//     return item.servicesList.find((service) => service.id === tab.value);
//   });
// });

// const masters = ref<{ id: number; name: string; job: string; url: string }[]>(
//   []
// );
const setTabs = () => {
  tabs.value = props.servises.data;
  if (tabs.value.length > 0) tab.value = tabs.value[0].id;
};

watchEffect(() => {
  if (props.servises) {
    setTabs();
  }
});
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
