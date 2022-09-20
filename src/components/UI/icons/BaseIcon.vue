<template>
  <component
    :is="dynamicComponent"
    class="icon"
    :class="[iconSizeClass, iconColors[props.color]]"
  ></component>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "xs" | "sm" | "md" | "lg";
    color?: "dark";
    icon: string;
  }>(),
  {
    size: "sm",
    color: "dark",
  }
);

const dynamicComponent = defineAsyncComponent(() => {
  const ConvertedIconName =
    props.icon.charAt(0).toUpperCase() + props.icon.slice(1); // it's for guard when pass name from lower case
  return import(`../../icons/${ConvertedIconName}Icon.vue`);
});

const iconSizeClass = computed(() => {
  return `icon-${props.size}`;
});

const iconColors = ref({
  dark: "fill-dark",
});
</script>

<style scoped></style>
