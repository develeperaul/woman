<template>
  <q-page class="env-b tw-grid tw-content-between">
    <div class="tw-container">
      <div
        v-if="categoryList.loading"
        class="tw-overflow-auto scroll-none tw-flex tw-gap-4 tw-mb-6"
      >
        <q-skeleton
          v-for="n in 10"
          width="95px"
          height="38px"
          class="tw-rounded-lg tw-shrink-0"
        />
      </div>
      <template v-else>
        <tab-head
          v-if="categoryList.data && dataRecord.master === null"
          v-model="tab"
          :options="categoryList.data"
          class="tw-mb-6"
        />
      </template>
      <div v-if="serviceList.loading" class="tw-grid tw-gap-4">
        <q-skeleton v-for="n in 3" height="76px" class="tw-rounded-2xl" />
      </div>
      <template v-else>
        <div class="tw-grid tw-gap-4">
          <div
            v-for="item in serviceList.data"
            @click.stop="
              () => {
                dataRecord.category = currentCategory;
                dataRecord.service = item;
                if (dataRecord.master) {
                  $router.push({
                    name: 'set-date',
                  });
                } else {
                  $router.push({
                    name: 'masters',
                  });
                }
              }
            "
            class="card tw-flex tw-items-center tw-justify-between"
          >
            <div class="">
              <div class="tw-flex tw-items-center tw-gap-2 tw-mb-1.5">
                <div class="tw-font-medium tw-text-t1">{{ item.name }}</div>
                <base-icon
                  v-if="info?.title"
                  @click.stop="infoOpen(item.name, item.description)"
                  name="info"
                  class="tw-w-4 tw-h-4 tw-text-[#D5D5D5]"
                />
              </div>
              <div class="tw-text-t1 tw-flex tw-gap-5">
                <div v-if="item.price_from">{{ item.price_from }}</div>
                <div v-if="item.price">
                  от
                  <span v-amount-pretty="item.price"> </span>
                </div>
                <div class="tw-text-[#8E8C8C]">~{{ item.time }}</div>
              </div>
            </div>
            <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
          </div>
        </div>
      </template>
    </div>
    <div class="card">
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-3">
        <div class="title">Наши работы</div>
        <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
      </div>
      <div class="tw-flex tw-overflow-auto tw-gap-3 scroll-none -tw-mx-4">
        <img
          v-for="(n, index) in currentCategory.work_images"
          @click="openPhoto(n.url)"
          :src="n.url"
          alt=""
          class="tw-w-[120px] tw-h-[120px] tw-rounded-xl tw-object-cover"
          :class="index === 0 ? 'tw-ml-4' : ''"
        />
      </div>
    </div>
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

    <q-dialog v-model="alert">
      <q-card>
        <img :src="url" alt="" />
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { CategotyT } from 'src/models/api/recording';
import { useRoute } from 'vue-router';

const route = useRoute();
const { categoryList, serviceList, dataRecord } = storeToRefs(recordsStore());
const alert = ref(false);
const url = ref<string>('');
const openPhoto = (u: string) => {
  url.value = u;
  alert.value = true;
};
onMounted(async () => {
  if (dataRecord.value.service !== null) dataRecord.value.service = null;
  if (dataRecord.value.master === null)
    try {
      await recordsStore().getCategories();
      if (route.query.categoryId) tab.value = +route.query.categoryId;
      else tab.value = categoryList.value.data[0].id;
      await recordsStore().getService(tab.value);
    } catch (e) {
      throw e;
    }
  else {
    await recordsStore().getServicesMaster(dataRecord.value.master.id);
  }
});

const storeSerives = servisesStore();
const { servicesList } = storeToRefs(storeSerives);
const open = ref(false);
const tab = ref<number>();

const currentCategory = computed((): CategotyT => {
  return categoryList.value.data.find((c) => c.id === tab.value) as CategotyT;
});

const info = ref<{ name: string; title: string } | null>(null);

const infoOpen = (name: string, title: string) => {
  info.value = {
    name,
    title,
  };
  open.value = true;
};

watch(tab, async (val) => {
  if (val) await recordsStore().getService(val);
});
</script>
<style lang="scss" scoped></style>
