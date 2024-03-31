<template>
  <q-page class="tw-container">
    <div v-if="actionList.loading" class="tw-grid tw-gap-3">
      <q-skeleton
        v-for="n in 10"
        height="218px"
        class="tw-rounded-2xl tw-shrink-0"
      />
    </div>
    <template v-else>
      <div class="tw-grid tw-gap-3">
        <div
          v-for="action in actionList.data"
          class="tw-bg-white tw-rounded-2xl tw-overflow-hidden"
          @click="$router.push({ name: 'action', params: { id: action.id } })"
        >
          <img
            :src="action.image.url"
            class="tw-h-[147px] tw-w-full tw-object-cover"
            alt=""
          />
          <div class="tw-grid tw-gap-1.5 tw-pt-2.5 tw-pb-4 tw-px-4">
            <div class="tw-text-t1 tw-font-semibold">{{ action.title }}</div>
            <div class="tw-text-gray2 tw-text-t2">{{ action.sub_title }}</div>
          </div>
        </div>
      </div>
    </template>
  </q-page>
</template>
<script setup lang="ts">
const { actionList } = actionsStore();
onMounted(async () => await actionsStore().getActions());
</script>
<style lang="scss" scoped></style>
