<template>
  <q-page class="tw-px-8">
    <div
      class="tw-bg-white tw-rounded-2xl tw-mb-[50px] tw-min-h-[435px] tw-text-center tw-grid"
    >
      <div class="tw-overflow-hidden">
        <swiper
          :space-between="50"
          :modules="[Pagination]"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :pagination="{
            type: 'bullets',
            el: '.swiper-paginate',
            bulletActiveClass: 'dot-line-active',
            bulletClass: 'dot-line',
          }"
          class="tw-mb-4 tw-h-full"
        >
          <swiper-slide class="">
            <div class="">
              <div
                class="tw-h-[210px] tw-rounded-2xl tw-overflow-hidden tw-mb-7.5"
              >
                <img
                  src="/test.jpeg"
                  class="tw-w-full tw-h-auto tw-object-cover"
                  alt=""
                />
              </div>
              <div class="tw-text-h2 tw-font-semibold tw-mb-3">
                Онлайн-запись
              </div>
              <div class="tw-text-t1 tw-text-gray2 tw-px-2">
                Записывайтесь на услуги через приложение и экономьте свое время
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div class="">
              <div
                class="tw-h-[210px] tw-rounded-2xl tw-overflow-hidden tw-mb-7.5"
              >
                <img
                  src="/test.jpeg"
                  class="tw-w-full tw-h-auto tw-object-cover"
                  alt=""
                />
              </div>
              <div class="tw-text-h2 tw-font-semibold tw-mb-3">
                Оплачивайте бонусами
              </div>
              <div class="tw-text-t1 tw-text-gray2 tw-px-2">
                За каждое посещение салона вы получаете бонусы, которыми можно
                оплатить до 30% стоимости услуги
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-paginate"></div>
        </swiper>
      </div>
    </div>
    <div>
      <base-button v-if="activeInd === 0" theme="gradient" @click="next">
        Дальше
      </base-button>
      <base-button
        v-else
        theme="gradient"
        @click="$router.push({ name: 'home' })"
      >
        Войти
      </base-button>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import type { Swiper as SW } from 'swiper';

const sw = ref<SW | null>(null);
const activeInd = ref(0);
const onSwiper = (swiper: SW) => {
  sw.value = swiper;
  activeInd.value = swiper.activeIndex;
};

const onSlideChange = (swiper: SW) => {
  activeInd.value = swiper.activeIndex;
};

const next = () => {
  if (sw.value) {
    sw.value.slideNext();
    activeInd.value = sw.value.activeIndex;
  }
};

onMounted(() => {
  if (sw.value) {
    // sw.value.slideNext();
  }
});
</script>
<style lang="scss">
.swiper-paginate {
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.dot-line {
  @apply tw-rounded-full;
  display: block;
  width: 8px;
  height: 8px;
  background: #e6e5e5;
}
.dot-line-active {
  @apply tw-bg-filter;
  width: 20px;
  height: 8px;
  border-radius: 5px;
}
</style>
