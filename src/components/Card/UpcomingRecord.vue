<template>
  <div class="card">
    <div class="title tw-mb-2">Предстоящая запись</div>
    <div class="subtitle tw-mb-1.5">{{ upcomingRecord.service }}</div>
    <div class="tw-flex tw-gap-2.5 tw-items-center tw-mb-3.5">
      <base-icon
        name="calendar"
        class="tw-w-[22px] tw-h-[22px] tw-text-icons"
      />
      {{ dayjs(upcomingRecord.date).locale('ru').format('D MMMM (dd) HH:mm') }}
    </div>
    <div class="tw-flex tw-gap-2.5 tw-text-gray tw-text-t2 tw-mb-1.5">
      <div>Мастер</div>
      <div>{{ upcomingRecord.personnel }}</div>
    </div>
    <div class="tw-flex tw-gap-2.5 tw-text-gray tw-text-t2">
      <div>Адрес</div>
      <div>{{ upcomingRecord.salon }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import { UpcomingEntryT } from 'src/models/api/main';

const props = defineProps<{
  upcomingRecord: UpcomingEntryT;
}>();
</script>
<style lang="scss" scoped></style>
