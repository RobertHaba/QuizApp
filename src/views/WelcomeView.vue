<template>
  <AppLayoutSimple class="justify-between">
    <div class="h-full flex flex-col justify-center items-center">
      <IllustrationLayout />
      <BaseTitleAndTextGroup>
        <template #title>Szybkie quizy na wyciągnięcie ręki</template>
        <template #text
          >szanujemy twój czas, dlatego nasze quizy mogą zająć Ci maksymalnie 2
          minuty.</template
        >
      </BaseTitleAndTextGroup>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <BaseButton>Użyj konta Google</BaseButton>
      <BaseButton type="secondary" :to-name="RouterNameEnum.Register"
        >Zaczynamy</BaseButton
      >
    </div>
  </AppLayoutSimple>
</template>

<script setup lang="ts">
//Enums
import { RouterNameEnum } from "@/enums/Index";

// Components
import IllustrationLayout from "@/components/layouts/IllustrationLayout.vue";
import BaseTitleAndTextGroup from "@/components/layouts/BaseTitleAndTextGroup.vue";
</script>

<style scoped></style>
