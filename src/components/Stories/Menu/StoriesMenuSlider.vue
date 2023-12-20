<template>
  <swiper
    class="stories-menu-slider"
    :slides-per-view="swiperOptions.slidesPerView"
  >
    <swiper-slide
      class="stories-menu-slider__item"
      v-for="(story, index) in stories.stories"
      :key="story.id"
      :style="{ backgroundColor: story.bg }"
      @click="openStory(index)"
    >
      <div class="stories-menu-slider__item-img">
        <img src="/test.jpeg" alt="" />
      </div>
      <div class="stories-menu-slider__item-title">
        Открытие нового салона на Пушкина
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from 'vue';
import { useStoriesStore } from 'src/stores/stories';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const stories = useStoriesStore();

const swiperOptions = ref({
  slidesPerView: 'auto',
});

const openStory = (index) => {
  stories.storyIndex = index;
  stories.isStoriesActive = true;
};
</script>

<style lang="scss" scoped>
.stories-menu-slider {
  overflow: visible;

  &__item {
    padding: 6px;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    display: grid;
    align-content: end;
    width: 90px;
    height: 90px;

    &:not(:last-child) {
      margin-right: 10px;
    }
    &-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      &::before {
        @apply tw-bg-black/30;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      img {
        object-fit: cover;
      }
    }
    &-title {
      position: relative;
      font-size: 9px;
      line-height: 120%;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>
