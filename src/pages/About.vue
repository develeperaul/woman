<template>
  <q-page class="tw-container tw-mt-5 tw-mb-7.5">
    <swiper
      :space-between="50"
      :modules="[Pagination]"
      :pagination="{
        type: 'bullets',
        el: '.swiper-paginate',
        bulletActiveClass: 'dot-active',
        bulletClass: 'dot',
      }"
      class="tw-mb-4"
    >
      <swiper-slide class="">
        <div class="tw-h-[210px] tw-rounded-2xl tw-overflow-hidden">
          <img
            src="/test.jpeg"
            class="tw-w-full tw-h-auto tw-object-cover"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="tw-h-[210px] tw-rounded-2xl tw-overflow-hidden">
          <img
            src="/test.jpeg"
            class="tw-w-full tw-h-auto tw-object-cover"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="tw-h-[210px] tw-rounded-2xl tw-overflow-hidden">
          <img
            src="/test.jpeg"
            class="tw-w-full tw-h-auto tw-object-cover"
            alt=""
          />
        </div>
      </swiper-slide>
      <div class="swiper-paginate"></div>
    </swiper>
    <div class="title tw-mb-3">Сеть студий красоты WO/MAN</div>
    <div class="tw-grid tw-gap-2.5 tw-mb-6">
      <p>
        В бьюти-индустрии мы работаем с 2013 года. За это время мы сделали
        красивее более 10 000 клиентов.
      </p>
      <p>
        Мы - эксперты в области сложного окрашивания. Вы можете без сомнения
        доверить волосы нашим профессионалам.
      </p>
    </div>
    <div class="card tw-shadow-base tw-w-fit">
      <div class="tw-text-t1 tw-font-semibold">Проспект Октября, 2</div>
      <a href="#" class="tw-text-link tw-text-t1"> На карте </a>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
</script>
<style lang="scss">
.swiper-paginate {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 10px;
}
.dot {
  @apply tw-rounded-full;
  height: 7px;
  width: 7px;
  background: #d3d2d2;

  &-active {
    background: theme('colors.filter');
  }
}
</style>
