<template>
  <q-page class="tw-container">
    <div
      v-if="cosmeticsCategoryList.loading"
      class="tw-flex tw-gap-2.5 tw-overflow-auto scroll-none tw-mb-6"
    >
      <q-skeleton
        v-for="n in 10"
        width="95px"
        height="38px"
        class="tw-rounded-2xl tw-shrink-0"
      />
    </div>
    <template v-else>
      <tab-head v-model="tab" :options="tabs" class="tw-mb-6" />
    </template>

    <div v-if="productList.loading" class="tw-grid tw-grid-cols-2 tw-gap-3">
      <q-skeleton
        v-for="n in 10"
        height="160px"
        class="tw-rounded-2xl tw-shrink-0"
      />
    </div>
    <template v-else>
      <div
        v-if="productList.data.length > 0"
        class="tw-grid tw-grid-cols-2 tw-gap-3"
      >
        <template v-for="p in productList.data">
          <router-link :to="{ name: 'tovar', params: { id: p.id } }" class="">
            <div
              class="tw-rounded-10 tw-bg-white tw-mb-1.5 tw-overflow-hidden tw-h-[160px] tw-grid tw-place-content-center tw-relative"
            >
              <img
                :src="p.image[0].url"
                alt=""
                class="tw-absolute tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div>{{ p.name }}</div>
          </router-link>
        </template>
      </div>
      <div v-else class="tw-text-center">Список пуст</div>
    </template>
  </q-page>
</template>
<script setup lang="ts">
import { CosemticCategoryT } from 'src/models/api/cosmetic';

const { cosmeticsCategoryList, productList } = storeToRefs(cosmeticsStore());

const tab = ref<number | null>(null);
const tabs = ref<CosemticCategoryT[]>([]);

const getData = () => {
  Promise.allSettled([cosmeticsStore().getCosmeticsCategories()]);
};
const setTabs = () => {
  tabs.value = cosmeticsCategoryList.value.data;
  if (tabs.value.length > 0) {
    tab.value = tabs.value[0].id;
    cosmeticsStore().getProducts(tab.value);
  }
};
onMounted(() => getData());
watchEffect(() => {
  if (cosmeticsCategoryList.value.data) {
    setTabs();
  }
});
</script>
<style lang="scss" scoped></style>
