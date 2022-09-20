<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";

onBeforeMount(() => {
  useAuthStore().fetchUser();
});
</script>

<template>
  <main class="max-w-md mx-auto">
    <RouterView />
  </main>
</template>
