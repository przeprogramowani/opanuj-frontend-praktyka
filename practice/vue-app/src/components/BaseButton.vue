<template>
  <button
    class="rounded-md text-lg"
    :class="buttonClass"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { validate, reset } = defineProps({
  validate: {
    type: Boolean,
    required: false
  },
  reset: {
    type: Boolean,
    required: false
  }
});

const validateButtonClass = "bg-blue-200 hover:bg-blue-800 hover:text-white p-4 mt-4"
const resetButtonClass = "bg-red-200 hover:bg-red-800 hover:text-white p-4 mt-4"

const buttonClass = computed<string>(() => {
  if (validate) {
    return validateButtonClass;
  } else if (reset) {
    return resetButtonClass;
  } else {
    return "";
  }
});

</script>

