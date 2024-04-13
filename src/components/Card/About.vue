<template>
  <div v-if="salons.loading">
    <q-skeleton height="198px" class="tw-rounded-2xl" />
  </div>
  <template v-else>
    <div class="card tw-shadow-base">
      <div class="tw-flex tw-items-center tw-justify-between">
        <div class="title">О салоне</div>
        <q-btn round flat>
          <base-icon name="forward" class="tw-w-10 tw-h-10 tw-text-[#C7C7C7]" />
        </q-btn>
      </div>
      <div class="tw-overflow-hidden">
        <swiper :space-between="16">
          <swiper-slide v-for="salon in salons.data">
            <router-link :to="{ name: 'about', params: { id: salon.id } }">
              <div>
                <div class="tw-font-semibold tw-text-t1 tw-mb-2">
                  {{ salon.city }} {{ salon.street }}, {{ salon.number_house }}
                </div>
                <div class="tw-mb-2">{{ salon.phone }}</div>
                <div class="tw-mb-4">
                  с {{ salon.work_from }} до {{ salon.work_to }}
                </div>
                <div class="tw-flex tw-gap-2">
                  <a
                    href="#"
                    class="tw-rounded-full tw-w-[34px] tw-h-[34px] tw-bg-primaryto tw-grid tw-place-content-center"
                  >
                    <base-icon name="wp" class="tw-text-white tw-w-4 tw-h-4" />
                  </a>

                  <a
                    href="#"
                    class="tw-rounded-full tw-w-[34px] tw-h-[34px] tw-bg-primaryto tw-grid tw-place-content-center"
                  >
                    <base-icon name="tg" class="tw-text-white tw-w-4 tw-h-4" />
                  </a>

                  <a
                    href="#"
                    class="tw-rounded-full tw-w-[34px] tw-h-[34px] tw-bg-primaryto tw-grid tw-place-content-center"
                  >
                    <base-icon name="vk" class="tw-text-white tw-w-4 tw-h-4" />
                  </a>
                </div>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import { DataVal } from 'src/models';
import { SalonT } from 'src/models/api/main';
import { Swiper, SwiperSlide } from 'swiper/vue';
const props = defineProps<{
  salons: DataVal<SalonT[]>;
}>();
</script>
<style lang="scss" scoped></style>
