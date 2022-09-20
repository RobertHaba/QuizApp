<template>
  <component
    :is="componentTag"
    :to="routerLinkTo"
    class="flex items-center justify-center px-4 py-2 text-center rounded-2xl"
    :class="btnClass[props.type][props.color]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "primary" | "secondary" | "link";
    toName?: string;
    color?: "blue" | "orange";
  }>(),
  {
    type: "primary",
    toName: undefined,
    color: "orange",
  }
);

const componentTag = computed(() => {
  return props.toName ? "router-link" : "button";
});

const routerLinkTo = computed(() => {
  return props.toName ? { name: props.toName } : "";
});

const btnClass = ref({
  primary: {
    orange: "bg-orange text-dark",
    blue: "bg-blue text-dark",
  },
  secondary: {
    orange: "border border-orange text-gray",
    blue: "border border-blue text-gray",
  },
  link: {
    orange: "px-0 py-0 text-orange",
    blue: "px-0 py-0 text-blue",
  },
});
</script>

<style scoped></style>
