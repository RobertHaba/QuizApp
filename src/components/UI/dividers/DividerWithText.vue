<template>
  <div class="relative flex items-center w-full">
    <BaseDivider />
    <span class="dark:text-blue-dark px-4"><slot /></span>
    <BaseDivider />
  </div>
</template>

<script setup lang="ts">
import BaseDivider from "./BaseDivider.vue";
</script>

