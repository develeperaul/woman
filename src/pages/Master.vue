<template>
  <q-page class="env-b">
    <div v-if="master.loading">
      <q-skeleton height="390px" class="tw-rounded-2xl" />
    </div>
    <template v-else>
      <template v-if="master.data">
        <div :class="{ 'head-other': data.other }" class="tw-mb-8 tw-pb-5">
          <div class="tw-container env-t">
            <div class="-tw-ml-2 tw-mb-1.5">
              <q-btn flat round @click="$router.go(-1)">
                <base-icon name="back" class="tw-w-10 tw-h-10 tw-text-white" />
              </q-btn>
            </div>
            <div class="tw-flex tw-gap-2.5 tw-items-center">
              <q-avatar size="90px">
                <img
                  v-if="master.data.profile_image"
                  :src="master.data.profile_image.url"
                  alt=""
                />
                <base-icon v-else name="user" class="tw-w-6 tw-h-6" />
              </q-avatar>
              <div>
                <div
                  class="tw-text-h2 tw-mb-1.5 tw-font-semibold"
                  :class="{ ' tw-text-white': data.other }"
                >
                  {{ master.data.name }}
                </div>
                <div
                  class="tw-text-gray2 tw-text-t1"
                  :class="{ 'tw-text-[#DBDBDB]': data.other }"
                >
                  {{ master.data.profession }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card tw-mb-3">
          <div class="tw-text-t1 tw-mb-4" v-if="master.data.description">
            {{ master.data.description }}
          </div>
          <!-- <div
            v-if="master.data.categories.length > 0"
            class="tw-grid tw-gap-3"
          >
            <div v-for="item in master.data.categories">
              <div class="tw-text-t1 tw-font-semibold">{{ item.name }}</div>
              <div class="tw-grid tw-gap-0.5">
                <div
                  v-for="i in item.services"
                  class="tw-flex tw-gap-2 tw-items-center"
                >
                  <div
                    class="tw-rounded-full tw-w-1.5 tw-h-1.5 tw-bg-title"
                  ></div>
                  <div>{{ i.name }}</div>
                </div>
              </div>
            </div>
          </div> -->
        </div>

        <Works
          v-if="master.data.work_images.length > 0"
          :to="{ name: 'our-works' }"
          title="Работы"
          :imgs="master.data.work_images"
          class="tw-mb-5.5"
        />
        <div class="tw-container">
          <base-button
            @click.stop="
              () => {
                dataRecord.master = master.data;

                $router.push({
                  name: 'haircuts',
                });
              }
            "
            theme="gradient"
          >
            Записаться
          </base-button>
        </div>
      </template>
    </template>
  </q-page>
</template>
<script setup lang="ts">
import data from '/public/data.json';
import Works from 'src/components/Card/Works.vue';
const props = defineProps<{
  id: string;
}>();
const { dataRecord } = storeToRefs(recordsStore());
const { masterCardVal: master } = storeToRefs(mainStore());
// const master = computed(() => {
//   if (masters.value.data.length > 0)
//     return masters.value.data.find((m) => m.id === +props.id);
// });

const storeSerives = servisesStore();
// const master = computed(() => storeSerives.getMaster(+props.id));
const imgs = [
  '/test.jpeg',
  '/test.jpeg',
  '/test.jpeg',
  '/test.jpeg',
  '/test.jpeg',
  '/test.jpeg',
];

onMounted(async () => {
  recordsStore().rezetDataStore();
  await mainStore().getMasterCard(props.id);
});
</script>
<style lang="scss" scoped>
.head-other {
  background: linear-gradient(
    180deg,
    theme('colors.master_head') 0%,
    theme('colors.master_headto') 100%
  );
  border-radius: 0 0 15px 15px;
}
</style>
