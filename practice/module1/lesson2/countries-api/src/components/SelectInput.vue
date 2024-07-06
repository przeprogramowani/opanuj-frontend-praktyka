<script setup lang="ts">
import { ref } from 'vue';

interface SelectInputOption {
  value: string;
  label: string;
}

defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array as () => SelectInputOption[],
    required: true,
  },
});

const select = ref('alphabetical');
const emit = defineEmits(['onChange']);
</script>

<template>
  <label>
    {{ label }}:&nbsp;
    <select v-model="select" @change="emit('onChange', select)">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>
