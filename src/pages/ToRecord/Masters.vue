<template>
  <q-page class="tw-container">
    <div v-if="masterList.loading" class="tw-grid tw-gap-3">
      <q-skeleton
        v-for="n in 10"
        height="98px"
        class="tw-rounded-2xl tw-shrink-0"
      />
    </div>
    <template v-else>
      <div class="tw-grid tw-gap-3">
        <div
          v-for="(master, index) in masterList.data"
          class="card tw-flex tw-justify-between tw-items-center tw-gap-2.5"
          @click.stop="
            () => {
              dataRecord.master = master;
              if (dataRecord.service) {
                $router.push({
                  name: 'set-date',
                });
              } else {
                $router.push({
                  name: 'haircuts',
                });
              }
            }
          "
        >
          <!-- :to="{ name: 'services', params: { id: master.id } }" -->
          <div class="tw-flex tw-gap-2.5">
            <q-avatar size="54px" class="tw-bg-second">
              <img
                v-if="master.profile_image"
                :src="master.profile_image.url"
                alt=""
              />
              <base-icon v-else name="user" class="tw-w-6 tw-h-6" />
            </q-avatar>
            <div class="tw-grid tw-content-start">
              <div class="tw-text-t2 tw-mb-1.5 tw-flex tw-gap-2">
                <span>
                  {{ master.name }}
                </span>
                <base-icon
                  v-if="master?.description"
                  @click.stop="infoOpen(master.name, master.description)"
                  name="info"
                  class="tw-w-4 tw-h-4 tw-text-[#D5D5D5]"
                />
              </div>
              <div class="tw-text-[#8E8C8C] tw-text-t3 tw-mb-2.5">
                {{ master.profession }}
              </div>
              <div
                v-if="dataRecord.service"
                class="tw-flex tw-gap-5 tw-text-t1"
              >
                <div v-amount-pretty="master.price"></div>
                <div class="tw-text-[#8E8C8C]">{{ master.time }}</div>
              </div>
            </div>
          </div>
          <base-icon name="forward" class="tw-text-[#C7C7C7] tw-w-6 tw-h-6" />
        </div>
      </div>
      <Info v-model="open">
        <template #default>
          <div class="tw-text-h2 tw-font-semibold tw-mb-2.5">
            {{ info?.name }}
          </div>
          <div class="tw-mb-5">
            <p class="tw-text-t1">
              {{ info?.title }}
            </p>
          </div>
        </template>
      </Info>
    </template>
  </q-page>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';

const { masterList, dataRecord } = storeToRefs(recordsStore());

onMounted(async () => {
  if (dataRecord.value.master !== null) dataRecord.value.master = null;
  if (dataRecord.value.service)
    await recordsStore().getMastersService(+dataRecord.value.service.id);
  else {
    await recordsStore().getMasters();
  }
});

const open = ref(false);
const info = ref<{ name: string; title: string } | null>(null);

const infoOpen = (name: string, title: string) => {
  info.value = {
    name,
    title,
  };
  open.value = true;
};
</script>
<style lang="scss" scoped></style>
