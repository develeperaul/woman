<template>
  <q-page class="tw-container tw-grid tw-content-betweens">
    <div>
      <q-btn flat round class="-tw-ml-4 tw-mb-4" @click="$router.go(-1)">
        <base-icon name="back" class="tw-w-8 tw-h-8" />
      </q-btn>
      <template v-if="profile.data">
        <div class="tw-text-h2 tw-font-semibold tw-mb-7.5">
          {{ profile.data?.name }}
        </div>
        <Form @submit="submit">
          <base-input
            name="date"
            v-model="profile.data.birthday"
            maska="##-##-####"
            :rules="`dateformat:${now}`"
            label="Дата рождения"
            placeholder="ДД-ММ-ГГГГ"
            class="tw-mb-5"
            disabled
          />
          <!-- <div>
            <div class="tw-text-t1 tw-font-medium tw-mb-1.5">Пол</div>
            <div class="tw-flex tw-gap-2.5">
              <button
                @click="gender = 'm'"
                type="button"
                class="tw-rounded-10 tw-text-t1 tw-w-[50px] tw-h-[50px]"
                :class="
                  gender === 'm'
                    ? ' tw-bg-filter tw-text-white'
                    : 'tw-bg-white tw-text-gray2'
                "
              >
                М
              </button>
              <button
                @click="gender = 'w'"
                type="button"
                class="tw-rounded-10 tw-text-t1 tw-w-[50px] tw-h-[50px]"
                :class="
                  gender === 'w'
                    ? ' tw-bg-filter tw-text-white'
                    : 'tw-bg-white tw-text-gray2'
                "
              >
                Ж
              </button>
            </div>
          </div>
          <div class="tw-text-gray2 tw-text-t2 tw-mt-2">
            Укажите пол и получите 50 бонусов
          </div> -->
        </Form>
      </template>
    </div>
    <div class="tw-self-end tw-mb-20">
      <div class="tw-text-link tw-text-t2 tw-mb-4" @click="openExit = true">
        Выйти из аккаунта
      </div>
      <div class="tw-text-error tw-text-t2" @click="openDelete = true">
        Удалить аккаунт
      </div>
    </div>
    <ProfileDelete v-model="openDelete" />
    <ProfileExit v-model="openExit" />
  </q-page>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import ProfileDelete from 'src/components/Modal/ProfileDelete.vue';
import ProfileExit from 'src/components/Modal/ProfileExit.vue';

const { profile } = storeToRefs(profileStore());

onMounted(async () => {
  if (profile.value) await profileStore().getProfile();
});

const openDelete = ref(false);
const openExit = ref(false);
const now = dayjs().valueOf();

const date = ref('15-10-2000');
const submit = (val) => {
  console.log(val);
};

const gender = ref<'m' | 'w' | null>('w');
</script>
<style lang="scss" scoped></style>
