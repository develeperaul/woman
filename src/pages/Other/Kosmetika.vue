<template>
  <q-page class="tw-container">
    <tab-head v-model="tab" :options="tabs" class="tw-mb-6" />
    <tab-body v-model="tab">
      <tab-content :name="1">
        <div class="tw-grid tw-grid-cols-2 tw-gap-3">
          <router-link
            :to="{ name: 'tovar', params: { id: 1 } }"
            v-for="n in 10"
            class=""
          >
            <div
              class="tw-rounded-10 tw-bg-white tw-mb-1.5 tw-overflow-hidden tw-h-[160px] tw-grid tw-place-content-center"
            >
              <img src="/waterup.png" alt="" class="" />
            </div>
            <div>Шампунь Kapous</div>
          </router-link>
        </div>
      </tab-content>
    </tab-body>
  </q-page>
</template>
<script setup lang="ts">
const tab = ref(1);
const tabs = [
  {
    name: 1,
    label: 'Волосы',
  },
  {
    name: 2,
    label: 'Уход за лицом',
  },
  {
    name: 3,
    label: 'Лак для ногтей',
  },
];
</script>
<style lang="scss" scoped></style>
