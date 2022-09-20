<template>
  <div class="flex flex-col gap-1.5">
    <InputLabel :for="props.name">
      <slot name="label" />
    </InputLabel>
    <input
      :id="props.name"
      :type="props.type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="props.name"
      :maxlength="props.maxLength"
      :minLength="props.minLength"
      :placeholder="props.placeholder"
      class="px-4 py-2 rounded-2xl border dark:border-gray dark:bg-dark"
    />
    <InputErrorText :has-error="props.hasError">
      <slot name="errorMessage" />
    </InputErrorText>
  </div>
</template>

<script setup lang="ts">
import InputErrorText from "./InputErrorText.vue";
import InputLabel from "./InputLabel.vue";
const props = defineProps<{
  hasError: Boolean;
  name: string;
  modelValue: any;
  type: "text" | "email" | "password";
  placeholder: string;
  maxLength?: number;
  minLength?: number;
}>();
</script>

<style scoped></style>
