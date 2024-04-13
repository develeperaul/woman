<template>
  <div class="footer tw-container">
    <router-link :to="{ name: 'home' }" v-slot="{ isActive }">
      <div class="nav" :class="{ active: isActive }">
        <base-icon name="home" class="icon tw-w-6 tw-h-6" />
        <span class="text"> Главная </span>
      </div>
    </router-link>

    <router-link :to="{ name: 'to-record' }" v-slot="{ isActive }">
      <div class="nav" :class="{ active: isActive }">
        <base-icon name="pen" class="icon tw-w-6 tw-h-6" />
        <span class="text"> Записаться </span>
      </div>
    </router-link>

    <router-link :to="{ name: 'records' }" v-slot="{ isActive }">
      <div class="nav" :class="{ active: isActive }">
        <base-icon name="user" class="icon tw-w-6 tw-h-6" />
        <span class="text"> Мои записи </span>
      </div>
    </router-link>

    <router-link :to="{ name: 'others' }" v-slot="{ isActive }">
      <div class="nav" :class="{ active: isActive }">
        <base-icon name="dots" class="icon tw-w-6 tw-h-6" />
        <span class="text"> Ещё </span>
      </div>
    </router-link>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.footer {
  @apply tw-border-t tw-border-[#DDD] tw-bg-[#F2F2F2];
  @apply tw-h-[70px] tw-flex tw-justify-between tw-items-center;
}

.nav {
  @apply tw-grid tw-gap-1 tw-justify-items-center;
  .icon {
    @apply tw-text-[#C4C4C4];
  }
  .text {
    @apply tw-text-[#B3B3B3] tw-text-t4;
  }
  &.active .icon,
  &.active .text {
    @apply tw-text-navto;
  }
}
</style>
