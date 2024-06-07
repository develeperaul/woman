<template>
  <swiper
    class="stories-group-slider"
    :modules="swiperOptions.modules"
    :pagination="swiperOptions.pagination"
  >
    <swiper-slide
      class="stories-group-slider__item"
      v-for="(n, i) in mainStory"
      :key="i"
    >
      <div class="stories-group-slider__item-body tw-container tw-pt-10">
        <div class="stories-group-slider__item-content">
          <div class="tw-text-h2 tw-font-semibold tw-mb-5">
            {{ n.title }}
          </div>
          <div class="tw-text-t1">
            {{ n.description }}
          </div>
        </div>
        <q-img
          :src="n.image.url"
          alt=""
          class="tw-rounded-2xl tw-h-[235px] tw-w-full"
          fit="cover"
        />
        <div v-if="n.action" class="tw-container tw-mb-6">
          <base-button
            theme="gradient"
            @click="$router.push({ name: 'to-record' })"
          >
            Записаться
          </base-button>
        </div>
      </div>
    </swiper-slide>

    <div class="swiper-pagination stories-group-slider__pagination"></div>
  </swiper>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const props = defineProps({
  mainStory: {
    type: Object,
    default: () => ({}),
  },
});

const swiperOptions = ref({
  modules: [Pagination],
  pagination: {
    el: '.stories-group-slider__pagination',
    type: 'bullets',
    clickable: false,
    renderBullet: function (index, className) {
      return (
        '<div class="' + className + '">' + '<span>' + '</span>' + '</div>'
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.stories-group-slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__item {
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    @apply tw-bg-[#AEC3ED];
    &-body {
      display: grid;
      width: 100%;
      height: 100%;
      align-items: center;
    }
    &-content {
      font-size: 25px;
    }
  }

  &__pagination {
    @apply tw-absolute tw-top-7.5 tw-left-0 tw-right-0 tw-opacity-0 tw-w-full;
    display: flex;
    justify-content: space-between;

    z-index: 1;
    visibility: hidden;
    transition: opacity 0.8s ease;

    :deep(.swiper-pagination-bullet) {
      position: relative;
      width: 100%;
      flex-shrink: 10;
      border-radius: 999px;
      height: 2px;
      background-color: white;
      overflow: hidden;
      box-shadow: 0 0 1px #00000059;

      margin-right: 0.9rem;

      &:first-child {
        margin-left: 2rem;
      }

      &:last-child {
        margin-right: 2rem;
      }

      span {
        position: absolute;
        background-color: theme('colors.storyes_line');
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 999px;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
    }
  }
}
</style>
