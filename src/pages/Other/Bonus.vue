<template>
  <q-page>
    <div
      class="tw-flex tw-gap-4 tw-flex-nowrap tw-container tw-mb-5"
      v-if="userBonus.data"
    >
      <div class="card tw-flex tw-gap-1.5">
        <base-icon name="briliant" class="tw-w-6 tw-h-6 tw-text-icons" />
        <div>
          <div class="tw-text-h2 tw-font-semibold tw-mb-0.5">
            {{ userBonus.data.bonus ?? 0 }}
          </div>
          <div>бонусов</div>
        </div>
      </div>
      <div
        class="tw-bg-second tw-rounded-10 tw-p-4 tw-flex tw-justify-between tw-flex-grow"
      >
        <div>
          <div class="tw-text-t1 tw-font-semibold tw-mb-1.5">Номер карты</div>
          <div>{{ userBonus.data.number_card }}</div>
        </div>
        <base-icon
          @click="open = true"
          name="info"
          class="tw-w-5 tw-h-5 tw-text-white"
        />
      </div>
    </div>

    <div class="card" v-if="bonusRule.data">
      <div class="tw-text-t1 tw-font-semibold tw-mb-3">
        {{ bonusRule.data.accrual }}% бонусами
      </div>
      <div class="tw-text-t1 tw-mb-1.5">
        1 бонус = {{ bonusRule.data.bonus }} ₽
      </div>
      <div class="tw-text-t1 tw-text-gray2 tw-mb-7.5">
        Оплачивайте бонусами до {{ bonusRule.data.write_off }}% чека.
      </div>
      <base-button
        @click="$router.push({ name: 'history-bonus' })"
        theme="gradient"
      >
        История начислений
      </base-button>
    </div>
    <BonusInfo v-model="open" />
  </q-page>
</template>
<script setup lang="ts">
import BonusInfo from 'src/components/Modal/BonusInfo.vue';

const open = ref(false);

// userBonus,
const { userBonus, bonusRule } = storeToRefs(bonusStore());
onMounted(() => {
  Promise.allSettled([bonusStore().getBonus(), bonusStore().getBonuseRules()]);
});
</script>
<style lang="scss" scoped></style>
