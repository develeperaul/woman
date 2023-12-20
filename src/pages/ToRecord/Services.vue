<template>
  <q-page class="tw-container">
    <div v-if="master">
      <tab-head v-if="tabs" v-model="tab" :options="tabs" class="tw-mb-6" />
      <div class="tw-grid tw-gap-4">
        <router-link
          v-if="master"
          v-for="item in services"
          :to="{
            name: 'set-date',
            params: {
              master_id: 1,
              services_id: tab,
              sub_services_id: item.id,
            },
          }"
          class="card tw-flex tw-items-center tw-justify-between"
        >
          <div class="">
            <div class="tw-flex tw-items-center tw-gap-2 tw-mb-1.5">
              <div class="tw-font-medium tw-text-t1">{{ item.name }}</div>
              <base-icon name="info" class="tw-w-4 tw-h-4" />
            </div>
            <div class="tw-text-t1 tw-flex tw-gap-5">
              <div>{{ item.price }}</div>
              <div class="tw-text-[#8E8C8C]">{{ item.time }}</div>
            </div>
          </div>
          <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
        </router-link>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
const props = defineProps<{
  id: string;
}>();

const tab = ref<number>();
const tabs = computed(() =>
  master.value?.servicesList.map((item) => {
    return { name: item.id, label: item.name };
  })
);
onMounted(() => {
  if (tabs.value) tab.value = tabs.value[0].name;
});
// [
//   {
//     name: 1,
//     label: 'Предстоящие',
//   },
//   {
//     name: 2,
//     label: 'Прошлые',
//   },
// ];
const storeSerives = servisesStore();
const { masters } = storeToRefs(storeSerives);
const master = computed(() => storeSerives.getMaster(+props.id));

const services = computed(() => {
  if (master.value) {
    const obj = master.value.servicesList.find((item) => item.id === tab.value);
    if (obj) return obj.sub_services;
  }
});
</script>
<style lang="scss" scoped></style>
