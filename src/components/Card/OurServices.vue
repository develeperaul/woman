<template>
  <div>
    <div class="title tw-mb-2.5">Наши услуги</div>
    <div
      v-if="servises.loading"
      class="tw-flex tw-gap-4 tw-overflow-auto scroll-none"
    >
      <q-skeleton
        v-for="n in 10"
        size="120px"
        class="tw-rounded-2xl tw-shrink-0"
      />
    </div>
    <template v-else>
      <div class="tw-flex tw-gap-4 tw-overflow-auto scroll-none -tw-mx-5.5">
        <div
          v-for="(n, index) in servises.data"
          class="tw-grid tw-gap-1.5"
          :class="[
            index === 0 ? 'tw-ml-5.5' : '',
            index === 9 ? 'tw-mr-5.5' : '',
          ]"
          @click.stop="
            () => {
              $router.push({
                name: 'haircuts',
                query: {
                  categoryId: n.id,
                },
              });
            }
          "
        >
          <q-img
            :src="n.image.url"
            alt=""
            class="tw-w-[120px] tw-h-[120px] tw-rounded-xl"
          />
          <div class="tw-text-t1">{{ n.name }}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { DataVal } from 'src/models';
import { ServiseCategoriesT } from 'src/models/api/main';
import { useRouter } from 'vue-router';
const props = defineProps<{
  servises: DataVal<ServiseCategoriesT[]>;
}>();
const { categoryList, serviceList, dataRecord } = storeToRefs(recordsStore());
const router = useRouter();
const toMasters = () => {
  dataRecord.category = currentCategory;
  dataRecord.service = item;
  router.push({
    name: 'masters',
  });
};
</script>
<style lang="scss" scoped></style>
