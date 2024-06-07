<template>
  <q-page class="tw-container">
    <div class="tw-grid tw-gap-4">
      <router-link
        :to="
          mainStore().salonList.data.length > 1
            ? { name: 'salons', params: { typeRecord: 'haircuts' } }
            : { name: 'haircuts' }
        "
      >
        <div class="card tw-flex tw-justify-between tw-items-center">
          <div class="tw-flex tw-items-center tw-gap-2.5">
            <div
              class="tw-rounded-full tw-h-10 tw-w-10 tw-bg-second tw-grid tw-place-content-center"
            >
              <base-icon name="mirror" class="tw-w-5 tw-h-5 tw-text-icons" />
            </div>
            <div class="tw-text-t1">Записаться на услугу</div>
          </div>
          <base-icon name="forward" class="tw-w-6 tw-h-6 tw-text-[#C7C7C7]" />
        </div>
      </router-link>

      <router-link
        :to="
          mainStore().salonList.data.length > 1
            ? { name: 'salons', params: { typeRecord: 'masters' } }
            : { name: 'masters' }
        "
      >
        <div class="card tw-flex tw-justify-between tw-items-center">
          <div class="tw-flex tw-items-center tw-gap-2.5">
            <div
              class="tw-rounded-full tw-h-10 tw-w-10 tw-bg-second tw-grid tw-place-content-center"
            >
              <base-icon name="women" class="tw-w-5 tw-h-5 tw-text-icons" />
            </div>
            <div class="tw-text-t1">Записаться к мастеру</div>
          </div>
          <base-icon name="forward" class="tw-w-6 tw-h-6 tw-text-[#C7C7C7]" />
        </div>
      </router-link>
    </div>
  </q-page>
</template>
<script setup lang="ts">
onMounted(() => recordsStore().rezetDataStore());
</script>
<style lang="scss" scoped></style>
