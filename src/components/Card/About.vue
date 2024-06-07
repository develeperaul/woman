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
            <div @click="openSalonPage($event, salon.id)">
              <div>
                <div class="tw-font-semibold tw-text-t1 tw-mb-2">
                  {{ salon.city }} {{ salon.street }}, {{ salon.number_house }}
                </div>
                <div class="tw-mb-2">{{ salon.phone }}</div>
                <div class="tw-mb-4">
                  с {{ dayjs(salon.work_from).locale('ru').format('HH:mm') }} до
                  {{ dayjs(salon.work_to).locale('ru').format('HH:mm') }}
                </div>
                <div class="tw-flex tw-gap-2">
                  <object v-for="link in salon.social_networks">
                    <a
                      :href="link.url"
                      class="tw-rounded-full tw-w-[34px] tw-h-[34px] tw-bg-icons tw-grid tw-place-content-center"
                    >
                      <base-icon
                        v-if="link.type === 'whatsapp'"
                        name="wp"
                        class="tw-text-iconstext tw-w-4 tw-h-4"
                      />

                      <base-icon
                        v-if="link.type === 'telegram'"
                        name="tg"
                        class="tw-text-iconstext tw-w-4 tw-h-4"
                      />

                      <base-icon
                        v-if="link.type === 'vkontakte'"
                        name="vk"
                        class="tw-text-iconstext tw-w-4 tw-h-4"
                      />
                    </a>
                  </object>
                </div>
              </div>
            </div>
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
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';

const props = defineProps<{
  salons: DataVal<SalonT[]>;
}>();

const router = useRouter();
const openSalonPage = (e, id: number) => {
  if (e.target?.closest('a') === null)
    router.push({ name: 'about', params: { id } });
};
</script>
<style lang="scss" scoped></style>
