<template>
  <div class="flex h-4">
    <span v-if="props.hasError" class="text-xs text-red"> <slot /> </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ hasError: Boolean }>();
</script>

<style scoped></style>
