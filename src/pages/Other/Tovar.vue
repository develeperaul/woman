<template>
  <q-page class=" ">
    <div v-if="productItem.loading">
      <div
        class="tw-bg-white tw-rounded-b-2xl tw-p-4 tw-relative tw-h-[273px] tw-mb-2.5"
      >
        <q-btn
          round
          flat
          class="tw-absolute tw-left-2 tw-top-2 tw-z-10"
          @click="$router.go(-1)"
        >
          <base-icon name="back" class="tw-w-12 tw-h-12"></base-icon>
        </q-btn>
        <q-skeleton height="241px" class="tw-rounded-2xl tw-shrink-0" />
      </div>
      <div class="card tw-mb-7.5">
        <q-skeleton height="25px" class="tw-mb-2.5" />
        <q-skeleton height="70px" class="tw-mb-6" />
        <q-skeleton width="100px" height="25px" class="tw-mb-1.5" />
        <q-skeleton width="150px" height="25px" />
      </div>
      <div class="tw-container">
        <q-skeleton height="49px" class="tw-rounded-2xl" />
      </div>
    </div>
    <template v-else>
      <template v-if="productItem.data">
        <div
          class="tw-bg-white tw-rounded-b-2xl tw-p-4 tw-relative tw-h-[273px] tw-mb-2.5"
        >
          <q-btn
            round
            flat
            class="tw-absolute tw-left-2 tw-top-2 tw-z-10"
            @click="$router.go(-1)"
          >
            <base-icon name="back" class="tw-w-12 tw-h-12"></base-icon>
          </q-btn>
          <swiper
            :space-between="50"
            :modules="[Pagination]"
            :pagination="{
              type: 'bullets',
              el: '.swiper-paginate',
              bulletActiveClass: 'dot-active',
              bulletClass: 'dot',
            }"
            class="tw-h-full"
          >
            <swiper-slide class="" v-for="img in productItem.data.image">
              <div class="tw-grid tw-place-content-center tw-h-full">
                <img :src="img.url" class="tw-object-cover" alt="" />
              </div>
            </swiper-slide>
            <div
              class="swiper-paginate tw-absolute tw-left-1/2 tw-bottom-0 tw-transform -tw-translate-x-1/2"
            ></div>
          </swiper>
        </div>
        <div class="card tw-mb-7.5">
          <div class="title tw-mb-2.5">{{ productItem.data.name }}</div>
          <div
            class="tw-text-t1 tw-mb-6"
            v-html="productItem.data.description"
          ></div>
          <div class="tw-text-h2 tw-font-semibold tw-mb-1.5">254 ₽</div>
          <div class="tw-text-t1">В наличии</div>
        </div>
        <div v-if="productItem.data.showBtn" class="tw-container">
          <base-button theme="gradient" @click="open = true">
            Заказать
          </base-button>
        </div>

        <Basket v-model="open" :id="id" />
      </template>
    </template>
  </q-page>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import Basket from 'src/components/Modal/Basket.vue';
const props = defineProps<{
  id: string;
}>();
const open = ref(false);
const { productItem } = storeToRefs(cosmeticsStore());

onMounted(async () => cosmeticsStore().getProduct(+props.id));
</script>
<style lang="scss">
.swiper-paginate {
  display: flex;
  justify-content: center;
  gap: 6px;
}
</style>
