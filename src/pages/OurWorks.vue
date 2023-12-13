<template>
  <q-page class="tw-container">
    <div class="tw-grid tw-grid-cols-3 tw-gap-3">
      <img
        v-for="(n, index) in 10"
        src="/test.jpeg"
        alt=""
        class="tw-rounded-xl"
      />
    </div>
    <Teleport to="body">
      <div>
        <q-btn round flat>
          <base-icon name="back" class="tw-w-6 tw-m-6" />
        </q-btn>
      </div>
    </Teleport>
  </q-page>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
