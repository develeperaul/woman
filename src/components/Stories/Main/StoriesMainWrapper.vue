<template>
  <div
    class="stories-main-wrapper env-t env-b"
    v-if="stories.isStoriesActive"
    @click="closeStories($event)"
  >
    <div ref="wrapperContent" class="stories-main-wrapper__content">
      <StoriesMainSlider ref="storiesMainSlider" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StoriesMainSlider from 'src/components/Stories/Main/StoriesMainSlider.vue';
import { useStoriesStore } from 'src/stores/stories';

const stories = useStoriesStore();
const wrapperContent = ref(null);
const storiesMainSlider = ref(null);

const closeStories = (e) => {
  const storiesSlider = storiesMainSlider.value?.$refs.storiesMainSlider.$el;
  const storiesSliderWrapper =
    storiesMainSlider.value?.$refs.storiesMainSlider.$el.firstElementChild;

  e.target === wrapperContent.value ||
  e.target === storiesSlider ||
  e.target === storiesSliderWrapper
    ? storiesMainSlider.value.closeStory()
    : false;
};
</script>

<style lang="scss" scoped>
.stories-main-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;

  background-color: rgba(#000, 0.3);

  &__content {
    width: 100%;
    height: 100%;
    display: flex;

    overflow: hidden;
  }
}
</style>
