<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ modelValue: number | "", isValid: boolean }>();
</script>

<template>
  <div>
    <input
      :value="modelValue"
      type="number"
      class="rounded-md shadow-md p-4 w-full"
      @input="$emit('update:modelValue', $event.target?.value)"
    />
    <p v-if="!isValid" class="text-red-500">Invalid input</p>
  </div>
</template>

<style scoped>

</style>