<template>
  <swiper
    class="stories-menu-slider"
    :slides-per-view="swiperOptions.slidesPerView"
  >
    <swiper-slide
      class="stories-menu-slider__item"
      v-for="(story, index) in stories"
      :key="story.id"
      @click="openStory(story.id, index)"
    >
      <div class="stories-menu-slider__item-img">
        <img :src="story.image.url" alt="" class="tw-object-cover" />
      </div>
      <div class="stories-menu-slider__item-title">
        {{ story.title }}
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { useStoriesStore } from 'src/stores/stories';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { StoriesT } from 'src/models/api/main';
const props = defineProps<{
  stories: StoriesT[];
}>();
const s = useStoriesStore();

const swiperOptions = ref({
  slidesPerView: 'auto',
});

const openStory = async (id: number, index: number) => {
  mainStore().storyIndex = index;
  mainStore().isStoriesActive = true;
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
        width: 100%;
        height: 100%;
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
