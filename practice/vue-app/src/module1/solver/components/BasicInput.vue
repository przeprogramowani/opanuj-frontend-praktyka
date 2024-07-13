<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
  type BasicInputProps = {
    type: 'text' | 'password' | 'number';
    disabled?: boolean;
    required?: boolean;
  }
  const emit = defineEmits(['onBlur'])
  const model = defineModel();
  const props = withDefaults(defineProps<BasicInputProps>(),{
    type: 'text',
    required: false,
    disabled: false,
  });
</script>

<template>
  <div class="flex flex-col">
  <input
    :disabled="props.disabled"
    :type="props.type"
    class="rounded-md shadow-md p-4"
    v-model="model"
    @blur="emit('onBlur', model)"
  />
  <slot></slot>
  </div>
</template>

<style scoped>

</style>
