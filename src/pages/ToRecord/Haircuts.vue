<template>
  <q-page class="env-b tw-grid tw-content-between">
    <div class="tw-container">
      <tab-head v-if="tabs" v-model="tab" :options="tabs" class="tw-mb-6" />
      <div class="tw-grid tw-gap-4">
        <div
          v-for="item in servicesList[tab - 1].sub_services"
          @click.stop="
            $router.push({
              name: 'masters',
              query: {
                services_id: servicesList[tab - 1].id,
                sub_services: item.id,
              },
            })
          "
          class="card tw-flex tw-items-center tw-justify-between"
        >
          <div class="">
            <div class="tw-flex tw-items-center tw-gap-2 tw-mb-1.5">
              <div class="tw-font-medium tw-text-t1">{{ item.name }}</div>
              <base-icon
                @click.stop="infoOpen(item.name, item.text)"
                name="info"
                class="tw-w-4 tw-h-4 tw-text-[#D5D5D5]"
              />
            </div>
            <div class="tw-text-t1 tw-flex tw-gap-5">
              <div>{{ item.price }}</div>
              <div class="tw-text-[#8E8C8C]">{{ item.time }}</div>
            </div>
          </div>
          <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'our-works' }" class="card">
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-3">
        <div class="title">Наши работы</div>
        <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
      </div>
      <div class="tw-flex tw-overflow-auto tw-gap-3 scroll-none -tw-mx-4">
        <img
          v-for="(n, index) in 10"
          src="/test.jpeg"
          alt=""
          class="tw-w-[120px] tw-h-[120px] tw-rounded-xl"
          :class="index === 0 ? 'tw-ml-4' : ''"
        />
      </div>
    </router-link>
    <Info v-model="open">
      <template #default>
        <div class="tw-text-h2 tw-font-semibold tw-mb-2.5">
          {{ info?.name }}
        </div>
        <div class="tw-mb-5">
          <p class="tw-text-t1">
            {{ info?.title }}
          </p>
        </div>
      </template>
    </Info>
  </q-page>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
const storeSerives = servisesStore();
const { servicesList } = storeToRefs(storeSerives);
const open = ref(false);
const tab = ref<number>(0);
const tabs = computed(() => {
  const list = servicesList.value.map((item) => {
    return { name: item.id, label: item.name };
  });
  if (list) tab.value = 1;
  return list;
});

const info = ref<{ name: string; title: string } | null>(null);
const haircuts = [
  {
    id: 1,
    name: 'Женская стрижка',
    title:
      'Лечебная стрижка горячими ножницами избавляет от проблемы секущихся кончиков и направлена на оздоровление волос.',
    price: 'от 1 000 ₽',
    time: '~45 мин',
  },
];

const infoOpen = (name: string, title: string) => {
  info.value = {
    name,
    title,
  };
  open.value = true;
};
</script>
<style lang="scss" scoped></style>
