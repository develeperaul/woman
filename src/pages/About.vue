<template>
  <q-page class="tw-container tw-mt-5 tw-mb-7.5">
    <template v-if="salon.data">
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
        <swiper-slide class="" v-for="img in salon.data.images">
          <div class="tw-h-[210px] tw-rounded-2xl tw-overflow-hidden">
            <img
              :src="img.url"
              class="tw-w-full tw-h-auto tw-object-cover"
              alt=""
            />
          </div>
        </swiper-slide>
        <div class="swiper-paginate"></div>
      </swiper>
      <div class="title tw-mb-3">
        {{ salon.data.city }} {{ salon.data.street }},
        {{ salon.data.number_house }}
      </div>
      <div class="tw-grid tw-gap-2.5 tw-mb-6" v-if="salon.data.description">
        <p>
          {{ salon.data.description }}
        </p>
      </div>
      <div class="card tw-shadow-base tw-w-fit">
        <a href="#" class="tw-text-link tw-text-t1"> На карте </a>
      </div>
    </template>
  </q-page>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
const props = defineProps<{
  id: string | number;
}>();
const { salon } = storeToRefs(mainStore());
onMounted(() => {
  mainStore().getSalon(+props.id);
});
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
