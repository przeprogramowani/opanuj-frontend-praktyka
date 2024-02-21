<script setup lang="ts">
import { defineModel } from 'vue';

const inputValue = defineModel<string>();

defineProps({
  placeholder: {
    type: String,
    required: false
  }
});

</script>

<template>
  <input
    v-model="inputValue"
    class="rounded-md p-4 shadow-lg"
    type="text"
    :placeholder="placeholder"
  />
</template>

<style scoped></style>