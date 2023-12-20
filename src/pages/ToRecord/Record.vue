<template>
  <q-page class="tw-container">
    <div class="card tw-mb-5">
      <div class="tw-text-t1 tw-font-semibold tw-mb-2.5" v-if="service">
        {{ service.name }}
      </div>
      <div
        class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-1.5"
        v-if="master"
      >
        <div class="tw-text-gray2">Мастер</div>
        <div>{{ master.name }}</div>
      </div>
      <div class="tw-grid tw-grid-cols-[52px_1fr] tw-gap-5 tw-mb-2.5">
        <div class="tw-text-gray2">Адрес</div>
        <div>Проспект Октября, 2</div>
      </div>
      <div class="tw-text-t1 tw-flex tw-gap-5" v-if="service">
        <div>{{ service.price }}</div>
        <div class="tw-text-[#8E8C8C]">{{ service.time }}</div>
      </div>
    </div>
    <div class="tw-mb-7.5">
      <AppCalendar @selectDate="selectDate" />
    </div>

    <base-button :disabled="!selectedDate" theme="gradient" @click="signUp">
      Записаться
    </base-button>
    <SuccessRecord v-model="success" />
  </q-page>
</template>
<script setup lang="ts">
import AppCalendar from 'src/components/AppCalendar.vue';
import { Record } from 'src/models';
import SuccessRecord from 'src/components/Modal/SuccessRecord.vue';
const props = defineProps<{
  master_id: string;
  services_id: string;
  sub_services_id: string;
}>();
import { storeToRefs } from 'pinia';
const storeRecords = recordsStore();
const storeSerives = servisesStore();
const { masters } = storeToRefs(storeSerives);
const success = ref(false);
const master = computed(() => storeSerives.getMaster(+props.master_id));
const service = computed(() => {
  if (master.value) {
    const s = master.value.servicesList.find(
      (item) => item.id === +props.services_id
    );
    if (props.sub_services_id && s) {
      return s.sub_services.find((item) => item.id === +props.sub_services_id);
    }
  }
});

const selectedDate = ref<{ day: string; time: string } | null>(null);
const selectDate = (e: { day: string; time: string } | null) => {
  selectedDate.value = e;
};
const signUp = () => {
  console.log(selectedDate.value, service.value, master.value);

  if (selectedDate.value && service.value && master.value) {
    const obj = {
      service: {
        name: service.value.name,
        duration: service.value.time,
        price: service.value.price,
      },
      master: {
        name: master.value.name,
        position: master.value.position,
        url: master.value.url,
      },
      date: {
        day: selectedDate.value.day,
        time: selectedDate.value.time,
      },
    };

    storeRecords.addRecords(obj);
    setTimeout(() => (success.value = true), 500);
  }
};
</script>
<style lang="scss" scoped>
.modal {
  @apply tw-fixed tw-top-0 tw-w-full tw-h-full tw-bg-whitedarken tw-grid tw-content-center tw-justify-items-center tw-px-12;
  z-index: 10000;
}
</style>
