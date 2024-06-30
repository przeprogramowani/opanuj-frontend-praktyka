<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const input = ref('');
const emit = defineEmits(['onChange']);
</script>

<template>
  <label>
    {{ label }}:&nbsp;
    <input
      v-model="input"
      type="text"
      :placeholder="placeholder"
      @input="emit('onChange', input)"
    />
  </label>
</template>
