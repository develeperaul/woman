<template>
  <q-page class=" ">
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
        <swiper-slide class="">
          <div class="tw-grid tw-place-content-center tw-h-full">
            <img src="/waterup.png" class="tw-object-cover" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div class="tw-grid tw-place-content-center tw-h-full">
            <img src="/waterup.png" class="tw-object-cover" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div class="tw-grid tw-place-content-center tw-h-full">
            <img src="/waterup.png" class="tw-object-cover" alt="" />
          </div>
        </swiper-slide>
        <div
          class="swiper-paginate tw-absolute tw-left-1/2 tw-bottom-0 tw-transform -tw-translate-x-1/2"
        ></div>
      </swiper>
    </div>
    <div class="card tw-mb-7.5">
      <div class="title tw-mb-2.5">Шампунь Kapous, 250 мл</div>
      <div class="tw-text-t1 tw-mb-6">
        Шампунь подходит для волос, склонных к жирности. Нежная кремовая
        текстура способствует тщательному очищению кожы головы.
      </div>
      <div class="tw-text-h2 tw-font-semibold tw-mb-1.5">254 ₽</div>
      <div class="tw-text-t1">В наличии</div>
    </div>
    <div class="tw-container">
      <base-button theme="gradient" @click="open = true">
        Заказать
      </base-button>
    </div>

    <Basket v-model="open" />
  </q-page>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import Basket from 'src/components/Modal/Basket.vue';

const open = ref(false);
</script>
<style lang="scss">
.swiper-paginate {
  display: flex;
  justify-content: center;
  gap: 6px;
}
</style>
