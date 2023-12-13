<template>
  <q-page class="tw-container">
    <div class="tw-grid tw-gap-3">
      <div
        v-for="(master, index) in masters"
        class="card tw-flex tw-justify-between tw-items-center tw-gap-2.5"
      >
        <router-link :to="{ name: 'services' }" class="tw-flex tw-gap-2.5">
          <q-avatar size="54px">
            <img :src="master.url" alt="" />
          </q-avatar>
          <div class="tw-grid tw-content-start">
            <div class="tw-text-t2 tw-mb-1.5">
              {{ master.name }}
            </div>
            <div class="tw-text-[#8E8C8C] tw-text-t3 tw-mb-2.5">
              {{ master.job }}
            </div>
            <div class="tw-flex tw-gap-5 tw-text-t1">
              <div>1 000 ₽</div>
              <div class="tw-text-[#8E8C8C]">1 ч</div>
            </div>
          </div>
        </router-link>
        <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
const masters = [
  {
    id: 1,
    name: 'Ольга Кононова',
    job: 'Парикмахер-универсал',
    url: '/test.jpeg',
  },
  {
    id: 1,
    name: 'Ольга Кононова',
    job: 'Парикмахер-универсал',
    url: '/test.jpeg',
  },
  {
    id: 1,
    name: 'Ольга Кононова',
    job: 'Парикмахер-универсал',
    url: '/test.jpeg',
  },
];
</script>
<style lang="scss" scoped></style>
