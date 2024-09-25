<template>
  <q-page class="tw-container env-t tw-grid tw-content-between">
    <div>
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-7">
        <div
          @click="$router.push({ name: 'profile' })"
          class="tw-text-h2 tw-font-semibold tw-flex tw-gap-2 tw-items-center"
        >
          {{
            profile.data && profile.data.name ? profile.data.name : 'Профиль'
          }}
          <base-icon name="forward" class="tw-w-6 tw-h-6" />
        </div>
        <div
          @click="$router.push({ name: 'notifications' })"
          class="tw-w-10 tw-h-10 tw-rounded-full tw-bg-icons tw-grid tw-place-content-center"
        >
          <base-icon name="bell" class="tw-w-6 tw-h-6 tw-text-iconstext" />
        </div>
      </div>
      <div class="tw-grid tw-gap-3.5">
        <router-link
          :to="{ name: 'bonus' }"
          class="card tw-flex tw-items-center tw-gap-3 tw-justify-between"
        >
          <div class="tw-flex tw-gap-3 tw-items-center">
            <base-icon name="briliant" class="tw-w-6 tw-h-6 tw-text-icons" />
            <span class="tw-text-t1"> Мои бонусы </span>
          </div>
          <base-icon name="forward" class="tw-w-6 tw-h-6 tw-text-[#C7C7C7]" />
        </router-link>
        <router-link
          :to="{ name: 'kosmetika' }"
          class="card tw-flex tw-items-center tw-gap-3 tw-justify-between"
        >
          <div class="tw-flex tw-gap-3 tw-items-center">
            <base-icon name="kosmetika" class="tw-w-6 tw-h-6 tw-text-icons" />
            <span class="tw-text-t1"> Косметика </span>
          </div>
          <base-icon name="forward" class="tw-w-6 tw-h-6 tw-text-[#C7C7C7]" />
        </router-link>

        <router-link
          :to="{ name: 'actions' }"
          class="card tw-flex tw-items-center tw-gap-3 tw-justify-between"
        >
          <div class="tw-flex tw-gap-3 tw-items-center">
            <base-icon name="action" class="tw-w-6 tw-h-6 tw-text-icons" />
            <span class="tw-text-t1"> Акции </span>
          </div>
          <base-icon name="forward" class="tw-w-6 tw-h-6 tw-text-[#C7C7C7]" />
        </router-link>
      </div>
    </div>
    <div class="tw-text-t1 tw-text-gray2 tw-mb-10">Версия {{ version }}</div>
  </q-page>
</template>
<script setup lang="ts">
import { version } from 'src/../package.json';
const { profile } = storeToRefs(profileStore());
onMounted(async () => {
  if (profile.value) await profileStore().getProfile();
});
</script>
<style lang="scss" scoped></style>
