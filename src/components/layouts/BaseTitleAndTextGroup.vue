<template>
  <div class="flex flex-col justify-center items-center text-center">
    <component :is="props.titleTag" class="text-2xl font-semibold">
      <slot name="title" />
    </component>
    <p class="text-lg">
      <slot name="text" />
    </p>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{ titleTag?: string }>(), {
  titleTag: "h2",
});
</script>
